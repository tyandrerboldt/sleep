package com.tyandrerboldt.sleep.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyandrerboldt.sleep.dto.CategoryDTO;
import com.tyandrerboldt.sleep.services.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryResource {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> listar(){
		List<CategoryDTO> categoriesDTO = categoryService.findAll();
		return ResponseEntity.ok().body(categoriesDTO);
	}
	
}
