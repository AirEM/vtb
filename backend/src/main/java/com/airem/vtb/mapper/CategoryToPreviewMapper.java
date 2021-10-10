package com.airem.vtb.mapper;

import com.airem.vtb.config.MapStructConfig;
import com.airem.vtb.controller.dto.PreviewDto;
import com.airem.vtb.domain.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
@Mapper(config = MapStructConfig.class, uses = {DatasetCardToPreviewCardDtoMapper.class, TagToTagNameMapper.class})

public interface CategoryToPreviewMapper {

    @Mapping(target = "category", source = "category.name")
    PreviewDto map(Category category);

}
