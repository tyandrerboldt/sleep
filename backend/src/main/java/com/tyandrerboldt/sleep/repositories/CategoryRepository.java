package com.tyandrerboldt.sleep.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tyandrerboldt.sleep.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

	@Query("from Category category join fetch category.musics where category.id = :categoryId")
	Optional<Category> findCategoryWithMusics(@Param("categoryId") Long categoryId);

}
