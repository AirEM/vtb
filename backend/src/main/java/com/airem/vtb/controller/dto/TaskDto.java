package com.airem.vtb.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TaskDto {

    private Long dataSetIdLeft;

    private Long dataSetIdRight;

    private String dataSetLeftFiled;

    private String dataSetRightFiled;

    private String operation;

    private List<RestrictionDto> restrictions;

}
