package com.airem.vtb.service;

import com.airem.vtb.domain.DatasetCard;
import com.airem.vtb.repository.DatasetCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DatasetCardService {

    private final DatasetCardRepository datasetCardRepository;

    @Transactional(readOnly = true)
    public List<DatasetCard> getAll() {
        return datasetCardRepository.findAll();
    }

    @Transactional(readOnly = true)
    public DatasetCard getById(Long id) {
        return datasetCardRepository.getById(id);
    }
}
