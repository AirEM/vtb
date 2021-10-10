package com.airem.vtb.service;

import com.airem.vtb.controller.dto.DatasetCardDto;
import com.airem.vtb.controller.dto.PreviewCardDto;
import com.airem.vtb.controller.dto.PreviewDto;
import com.airem.vtb.controller.filter.CategoryFilter;
import com.airem.vtb.controller.filter.DatasetCardFilter;
import com.airem.vtb.domain.Category;
import com.airem.vtb.domain.Company;
import com.airem.vtb.domain.DatasetCard;
import com.airem.vtb.domain.Tag;
import com.airem.vtb.mapper.DatasetCardToDtoMapper;
import com.airem.vtb.mapper.DatasetCardToPreviewCardDtoMapper;
import com.airem.vtb.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DatasetCardApiService {

    private static final Long PREVIEW_LIMIT = 3L;

    private final DatasetCardService datasetCardService;
    private final CategoryService categoryService;
    private final CompanyRepository companyRepository;

    private final DatasetCardToDtoMapper datasetCardToDtoMapper;
    private final DatasetCardToPreviewCardDtoMapper datasetCardToPreviewCardDtoMapper;

    @Transactional(readOnly = true)
    public List<DatasetCardDto> getAll(DatasetCardFilter filter) {
        return datasetCardService.getAll()
                .stream()
                .filter(datasetCard -> filterByCompany(datasetCard, filter))
                .filter(datasetCard -> filterByTag(datasetCard, filter))
                .map(datasetCardToDtoMapper::map)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PreviewDto> getPreview(DatasetCardFilter filter) {
        Map<Category, List<DatasetCard>> categoryWithCard = new HashMap<>();
        categoryService.getAll()
                .forEach(category ->
                        {
                            List<DatasetCard> cards = getFilteredCardByCategory(category, filter)
                                    .stream()
                                    .limit(PREVIEW_LIMIT)
                                    .collect(Collectors.toList());
                            if (!cards.isEmpty()) {
                                categoryWithCard.put(category, cards);
                            }
                        }
                );

        return categoryWithCard.entrySet().stream()
                .map(entry -> toPreview(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PreviewCardDto> getByCategory(CategoryFilter categoryFilter, DatasetCardFilter filter) {
        List<Category> categoryList = categoryService.getAll().stream()
                .filter(category -> category.getName().toLowerCase().equals(categoryFilter.getCategory()))
                .collect(Collectors.toList());
        return categoryList.stream()
                .map(Category::getCards)
                .flatMap(Collection::stream)
                .map(datasetCardToPreviewCardDtoMapper::map)
                .collect(Collectors.toList());
    }

    public DatasetCardDto getById(Long id) {
        return datasetCardToDtoMapper.map(datasetCardService.getById(id));
    }

    private boolean filterByCompany(DatasetCard datasetCard, DatasetCardFilter filter) {
        if (filter.getCompanies() != null) {
            Company company = companyRepository.getById(datasetCard.getCompany().getId());
            return filter.getCompanies().contains(company.getName());
        }
        return true;
    }

    private boolean filterByTag(DatasetCard datasetCard, DatasetCardFilter filter) {
        if (filter.getTags() != null) {
            Set<String> cardTags = datasetCard.getTags()
                    .stream()
                    .map(Tag::getName)
                    .map(String::toLowerCase)
                    .collect(Collectors.toSet());
            return filter.getTags()
                    .stream()
                    .map(String::toLowerCase)
                    .anyMatch(cardTags::contains);
        }
        return true;
    }

    private List<DatasetCard> getFilteredCardByCategory(Category category, DatasetCardFilter filter) {
        return category.getCards()
                .stream()
                .filter(datasetCard -> filterByCompany(datasetCard, filter))
                .filter(datasetCard -> filterByTag(datasetCard, filter))
                .collect(Collectors.toList());

    }

    private PreviewDto toPreview(Category category, List<DatasetCard> cards) {
        List<PreviewCardDto> previewCardDtoList = cards.stream()
                .map(datasetCardToPreviewCardDtoMapper::map)
                .collect(Collectors.toList());
        var previewDto = new PreviewDto();
        previewDto.setCategory(category.getName());
        previewDto.setCards(previewCardDtoList);
        return previewDto;
    }

}
