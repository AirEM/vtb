package com.airem.vtb.controller.request;

import com.airem.vtb.controller.dto.TaskDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TaskRequest {

    List<TaskDto> task;

}
