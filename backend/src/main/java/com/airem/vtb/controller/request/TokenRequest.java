package com.airem.vtb.controller.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TokenRequest {

    private String login;

    private Long days;

    private List<String> roles;
}
