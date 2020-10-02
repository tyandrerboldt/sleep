package com.tyandrerboldt.sleep.dto;

import java.io.Serializable;

import com.tyandrerboldt.sleep.entities.Category;

public class CategoryDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String uri;
	private String icon;

	public CategoryDTO() {
	}

	public CategoryDTO(Category category) {
		this.id = category.getId();
		this.name = category.getName();
		this.uri = category.getUri();
		this.icon = category.getIcon();
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

}
