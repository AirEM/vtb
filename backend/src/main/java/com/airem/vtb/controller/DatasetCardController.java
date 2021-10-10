package com.airem.vtb.controller;

import com.airem.vtb.controller.dto.DatasetCardDto;
import com.airem.vtb.controller.dto.PreviewCardDto;
import com.airem.vtb.controller.dto.PreviewDto;
import com.airem.vtb.controller.filter.CategoryFilter;
import com.airem.vtb.controller.filter.DatasetCardFilter;
import com.airem.vtb.service.DatasetCardApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/api/dataset/card")
@RequiredArgsConstructor
public class DatasetCardController {

    private final DatasetCardApiService datasetCardApiService;

    @GetMapping
    public List<DatasetCardDto> getAll(DatasetCardFilter filter) {
        return datasetCardApiService.getAll(filter);
    }

    @GetMapping("/preview")
    public List<PreviewDto> getPreview(DatasetCardFilter filter) {
        return datasetCardApiService.getPreview(filter);
    }

    @GetMapping("/by-category")
    public List<PreviewCardDto> getByCategory(CategoryFilter categoryFilter, DatasetCardFilter filter) {
        return datasetCardApiService.getByCategory(categoryFilter, filter);
    }

    @GetMapping("/{id}")
    public DatasetCardDto getById(@PathVariable Long id) {
        return datasetCardApiService.getById(id);
    }
}
