package com.airem.vtb.service;

import com.airem.vtb.controller.dto.TaskDto;
import com.airem.vtb.controller.request.TaskRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

    public void doTask(TaskRequest taskRequest) {
        for (var task : taskRequest.getTask()) {
            processTask(task);
        }

    }

    private void processTask(TaskDto taskDto) {
       // todo тут конткракт задачи отправляетс на внешнего клиента для обработки
    }

}
