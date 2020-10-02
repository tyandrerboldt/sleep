package com.tyandrerboldt.sleep.dto;

import java.io.Serializable;

import com.tyandrerboldt.sleep.entities.Author;

public class AuthorDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	
	public AuthorDTO() {
	}

	public AuthorDTO(Author author) {
		this.id = author.getId();
		this.name = author.getName();
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

}
