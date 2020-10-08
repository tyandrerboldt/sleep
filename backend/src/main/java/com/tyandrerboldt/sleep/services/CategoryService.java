package com.tyandrerboldt.sleep.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyandrerboldt.sleep.dto.CategoryDTO;
import com.tyandrerboldt.sleep.entities.Category;
import com.tyandrerboldt.sleep.repositories.CategoryRepository;
import com.tyandrerboldt.sleep.services.exceptions.ResourceNotFoundException;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<CategoryDTO> findAll() {
		List<Category> categories = categoryRepository.findAll();
		return categories.stream().map(category -> new CategoryDTO(category))
				.collect(Collectors.toList());
	}

	public CategoryDTO findCategoryWithMusics(Long categoryId) {
		Optional<Category> category = categoryRepository.findCategoryWithMusics(categoryId);
		
		if(!category.isPresent()) {
			throw new ResourceNotFoundException("Category not found!");
		}
		
		return new CategoryDTO(category.get(), category.get().getMusics());
	}
	
	public Category findOrFail(Long categoryId) {
		return categoryRepository.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category not found!"));
	}	
}
