package com.tyandrerboldt.sleep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.tyandrerboldt.sleep.dto.MusicDTO;
import com.tyandrerboldt.sleep.entities.Music;
import com.tyandrerboldt.sleep.repositories.MusicRepository;
import com.tyandrerboldt.sleep.services.exceptions.ResourceNotFoundException;

@Service
public class MusicService {

	@Autowired
	private MusicRepository musicRepository;
			
	public Page<MusicDTO> findAllPaged(PageRequest pageRequest){		
		Page<Music> musics = musicRepository.findAll(pageRequest);
		return musics.map(music -> new MusicDTO(music));
	}
	
	public MusicDTO findById(Long musicId){		
		Music music = findOrFail(musicId);
		return new MusicDTO(music, music.getCategories(), music.getAuthors());
	}
	
	public Music findOrFail(Long musicId) {
		return musicRepository.findById(musicId)
				.orElseThrow(() -> new ResourceNotFoundException("Music not found!"));
	}
		
}
