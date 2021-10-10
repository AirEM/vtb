package com.airem.vtb.repository;

import com.airem.vtb.domain.Category;
import com.airem.vtb.domain.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}
