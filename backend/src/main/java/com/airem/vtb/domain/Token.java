package com.airem.vtb.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "token")
public class Token {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "token")
    private String token;

    @Column(name = "login")
    private String login;

    @CreatedDate
    @Column(name = "DATE_CREATED")
    private LocalDateTime dateCreated;

    @Column(name = "DATE_EXPIRATION")
    private LocalDateTime dateExpiration;

    @OneToMany
    private List<Role> roles;
}
