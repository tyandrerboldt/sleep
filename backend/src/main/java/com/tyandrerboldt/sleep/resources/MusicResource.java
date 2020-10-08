package com.tyandrerboldt.sleep.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tyandrerboldt.sleep.dto.MusicDTO;
import com.tyandrerboldt.sleep.services.MusicService;

@RestController
@RequestMapping("/musics")
public class MusicResource {

	@Autowired
	private MusicService musicService;
			
	@GetMapping
	public ResponseEntity<Page<MusicDTO>> findAllPaged(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "title") String orderBy){
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.fromString(direction), orderBy);
		
		Page<MusicDTO> musicsDTO = musicService.findAllPaged(pageRequest);
		
		return ResponseEntity.ok().body(musicsDTO);
	}
	
	@GetMapping("/{musicId}")
	public ResponseEntity<MusicDTO> findById(@PathVariable Long musicId){
		MusicDTO musicDTO = musicService.findById(musicId);
		return ResponseEntity.ok().body(musicDTO);
	}
}
