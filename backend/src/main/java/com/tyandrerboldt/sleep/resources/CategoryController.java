package com.tyandrerboldt.sleep.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyandrerboldt.sleep.entities.Category;
import com.tyandrerboldt.sleep.repositories.CategoryRepository;

@RestController
@RequestMapping("/categories")
public class CategoryController {

	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping
	public List<Category> listar(){
		return categoryRepository.findAll();
	}
	
}
