package com.airem.vtb.mapper;

import com.airem.vtb.config.MapStructConfig;
import com.airem.vtb.controller.dto.PreviewCardDto;
import com.airem.vtb.domain.DatasetCard;
import com.airem.vtb.domain.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapStructConfig.class, uses = TagToTagNameMapper.class)
public interface DatasetCardToPreviewCardDtoMapper {

    @Mapping(target = "company", source = "company.name")
    PreviewCardDto map(DatasetCard datasetCard);
}
