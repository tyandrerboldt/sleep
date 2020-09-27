package com.tyandrerboldt.sleep.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tyandrerboldt.sleep.domain.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
