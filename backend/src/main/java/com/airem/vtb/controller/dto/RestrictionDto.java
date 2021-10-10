package com.airem.vtb.controller.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RestrictionDto {

    private String field;

    // <, >, like и т. д.
    private String restriction;

}
