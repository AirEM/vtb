package com.airem.vtb.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PreviewDto {

    private String category;

    private List<PreviewCardDto> cards;

}
