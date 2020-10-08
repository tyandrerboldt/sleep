package com.tyandrerboldt.sleep.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tyandrerboldt.sleep.dto.CategoryDTO;
import com.tyandrerboldt.sleep.entities.Category;
import com.tyandrerboldt.sleep.services.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryResource {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> findAll(){
		List<CategoryDTO> categoriesDTO = categoryService.findAll();
		return ResponseEntity.ok().body(categoriesDTO);
	}
	
	@GetMapping("/{categoryId}")
	public ResponseEntity<CategoryDTO> findById(@PathVariable Long categoryId){
		Category category = categoryService.findOrFail(categoryId);
		return ResponseEntity.ok().body(new CategoryDTO(category));
	}	
	
	@GetMapping("/{categoryId}/musics")
	public ResponseEntity<CategoryDTO> findCategoryWithMusics(
			@PathVariable Long categoryId,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "title") String orderBy){
		
//		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.fromString(direction), orderBy);
		
//		List<MusicDTO> musicsDTO = musicService.findMusicsByCategoryPaged(categoryId);
		CategoryDTO categoryDTO = categoryService.findCategoryWithMusics(categoryId);
		return ResponseEntity.ok().body(categoryDTO);
	}	
}
