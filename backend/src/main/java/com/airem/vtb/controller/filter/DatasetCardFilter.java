package com.airem.vtb.controller.filter;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class DatasetCardFilter {

    private List<String> tariffs;

    private List<String> companies;

    private List<String> tags;
}
