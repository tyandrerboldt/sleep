package com.tyandrerboldt.sleep.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyandrerboldt.sleep.dto.CategoryDTO;
import com.tyandrerboldt.sleep.entities.Category;
import com.tyandrerboldt.sleep.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<CategoryDTO> findAll() {
		List<Category> categories = categoryRepository.findAll();
		return categories.stream().map(category -> new CategoryDTO(category))
				.collect(Collectors.toList());
	}
	
}
