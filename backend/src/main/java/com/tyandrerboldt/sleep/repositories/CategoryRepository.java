package com.tyandrerboldt.sleep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tyandrerboldt.sleep.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
