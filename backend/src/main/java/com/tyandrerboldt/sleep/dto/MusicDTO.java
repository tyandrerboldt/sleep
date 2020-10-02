package com.tyandrerboldt.sleep.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.tyandrerboldt.sleep.entities.Author;
import com.tyandrerboldt.sleep.entities.Category;
import com.tyandrerboldt.sleep.entities.Music;

public class MusicDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String uuid;
	private String title;
	private String description;
	private Double duration;
	private String filePath;
	private String imagePath;
	Set<CategoryDTO> categories = new HashSet<>();
	Set<AuthorDTO> authors = new HashSet<>();

	public MusicDTO() {
	}

	public MusicDTO(Music music) {
		super();
		this.id = music.getId();
		this.uuid = music.getUuid();
		this.title = music.getTitle();
		this.description = music.getDescription();
		this.duration = music.getDuration();
		this.filePath = music.getFilePath();
		this.imagePath = music.getImagePath();
	}

	public MusicDTO(Music music, Set<Category> categories, Set<Author> authors) {
		this(music);
		categories.forEach(category -> this.categories.add(new CategoryDTO(category)));
		authors.forEach(author -> this.authors.add(new AuthorDTO(author)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getDuration() {
		return duration;
	}

	public void setDuration(Double duration) {
		this.duration = duration;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	public Set<CategoryDTO> getCategories() {
		return categories;
	}
	
	public Set<AuthorDTO> getAuthors() {
		return authors;
	}

}
