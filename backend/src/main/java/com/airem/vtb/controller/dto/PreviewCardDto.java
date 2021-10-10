package com.airem.vtb.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PreviewCardDto {

    private Long id;

    private String name;

    private String description;

    private String company;

    private List<String> tags;
}
