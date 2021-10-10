package com.airem.vtb.repository;


import com.airem.vtb.domain.Token;
import com.airem.vtb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token> findByToken(String token);

    Optional<Token> findByLogin(String login);
}
