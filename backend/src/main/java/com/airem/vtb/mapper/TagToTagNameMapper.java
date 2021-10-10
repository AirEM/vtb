package com.airem.vtb.mapper;

import com.airem.vtb.config.MapStructConfig;
import com.airem.vtb.domain.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(config = MapStructConfig.class)
public interface TagToTagNameMapper {

    default String map(Tag tag) {
        return tag.getName();
    }
}
