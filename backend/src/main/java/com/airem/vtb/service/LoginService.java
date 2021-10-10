package com.airem.vtb.service;

import com.airem.vtb.controller.dto.TokenDto;
import com.airem.vtb.controller.request.LoginByTokenRequest;
import com.airem.vtb.controller.request.LoginRequest;
import com.airem.vtb.controller.request.TokenRemoveRequest;
import com.airem.vtb.controller.request.TokenRequest;
import com.airem.vtb.domain.Role;
import com.airem.vtb.domain.Token;
import com.airem.vtb.domain.User;
import com.airem.vtb.exception.LoginException;
import com.airem.vtb.repository.LoginRepository;
import com.airem.vtb.repository.RoleRepository;
import com.airem.vtb.repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final LoginRepository loginRepository;
    private final TokenRepository tokenRepository;
    private final RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public void login(LoginRequest loginRequest) {
        Optional<User> userOptional = loginRepository.findByLogin(loginRequest.getLogin());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String passwordFromDb = user.getPassword();
            String md5Password = DigestUtils.md5DigestAsHex(loginRequest.getPassword().getBytes());
            boolean isLogin = md5Password.equals(passwordFromDb);
            if (isLogin) {
                return;
            }
        }
        throw new LoginException();
    }

    @Transactional(readOnly = true)
    public void loginByToken(LoginByTokenRequest loginRequest) {
        Optional<Token> tokenOptional = tokenRepository.findByToken(loginRequest.getToken());
        if (tokenOptional.isPresent()) {
            Token token = tokenOptional.get();
            LocalDateTime currentDate = LocalDateTime.now();
            LocalDateTime dateExpiration = token.getDateExpiration();
            boolean isToken = currentDate.isBefore(dateExpiration);
            if (isToken) {
                return;
            }
        }
        throw new LoginException();
    }

    @Transactional
    public TokenDto getToken(TokenRequest tokenRequest) {
        List<Role> roles = getRoles(tokenRequest.getRoles());
        LocalDateTime dateExpiration = LocalDateTime.now().plusDays(tokenRequest.getDays());

        UUID uuid = UUID.randomUUID();

        var token = new Token();
        token.setToken(uuid.toString());
        token.setLogin(tokenRequest.getLogin());
        token.setRoles(roles);
        token.setDateExpiration(dateExpiration);

       var savedToken = tokenRepository.save(token);

       return new TokenDto().setToken(savedToken.getToken());
    }

    @Transactional
    public void deleteToken(TokenRemoveRequest tokenRequest) {
        var tokenOptional = tokenRepository.findByLogin(tokenRequest.getLogin());
        tokenOptional.ifPresent(tokenRepository::delete);
    }

    private List<Role> getRoles(List<String> roles) {
        if (roles == null || roles.isEmpty()) {
            return Collections.emptyList();
        }
        List<String> formattedRoles = roles.stream()
                .map(String::toLowerCase)
                .collect(Collectors.toList());
        return roleRepository.findAll().stream()
                .filter(role -> formattedRoles.contains(role.getName().toLowerCase()))
                .collect(Collectors.toList());
    }

}
