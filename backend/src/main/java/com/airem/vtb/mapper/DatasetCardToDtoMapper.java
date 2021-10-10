package com.airem.vtb.mapper;

import com.airem.vtb.config.MapStructConfig;
import com.airem.vtb.controller.dto.DatasetCardDto;
import com.airem.vtb.domain.DatasetCard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapStructConfig.class, uses = TagToTagNameMapper.class)
public interface DatasetCardToDtoMapper {

    @Mapping(target = "category", source = "category.name")
    @Mapping(target = "company", source = "company.name")
    DatasetCardDto map(DatasetCard datasetCard);

}
