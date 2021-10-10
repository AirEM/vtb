package com.airem.vtb.repository;

import com.airem.vtb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepository extends JpaRepository<User, Long> {
    Optional<User> findByLogin(String login);
}
