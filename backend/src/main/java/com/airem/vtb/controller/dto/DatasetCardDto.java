package com.airem.vtb.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DatasetCardDto {

    private Long id;

    private String name;

    private String description;

    private Long cost;

    private String owner;

    private String type;

    private String company;

    private String category;

    private List<String> tags;

}
