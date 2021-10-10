package com.airem.vtb.controller;

import com.airem.vtb.controller.request.LoginByTokenRequest;
import com.airem.vtb.controller.request.LoginRequest;
import com.airem.vtb.controller.request.TokenRemoveRequest;
import com.airem.vtb.controller.request.TokenRequest;
import com.airem.vtb.exception.LoginException;
import com.airem.vtb.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/api/login")
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping
    public void login(@RequestBody LoginRequest loginRequest) {
        loginService.login(loginRequest);
    }

    @PostMapping("/token")
    public void loginByToken(@RequestBody LoginByTokenRequest loginRequest) {
        loginService.loginByToken(loginRequest);
    }

    @GetMapping("/token")
    public void getToken(TokenRequest tokenRequest) {
        loginService.getToken(tokenRequest);
    }

    @DeleteMapping("/token")
    public void deleteToken(@RequestBody TokenRemoveRequest tokenRequest) {
        loginService.deleteToken(tokenRequest);
    }

    @ExceptionHandler(value = LoginException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public void loginExceptionHandler() {
    }
}
