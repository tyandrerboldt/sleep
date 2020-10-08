package com.tyandrerboldt.sleep.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.tyandrerboldt.sleep.entities.Category;
import com.tyandrerboldt.sleep.entities.Music;

public class CategoryDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String uri;
	private String icon;
	List<MusicDTO> musics = new ArrayList<>();

	public CategoryDTO() {
	}

	public CategoryDTO(Category category) {
		super();
		this.id = category.getId();
		this.name = category.getName();
		this.uri = category.getUri();
		this.icon = category.getIcon();
	}
	
	public CategoryDTO(Category category,  Set<Music> musics) {
		this(category);
		musics.forEach(music -> this.musics.add(new MusicDTO(music)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
	public List<MusicDTO> getMusics() {
		return musics;
	}	
	
	public void setMusics(List<MusicDTO> musics) {
		this.musics = musics;
	}

}
