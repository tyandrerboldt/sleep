package com.tyandrerboldt.sleep.domain.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity(name = "tab_category")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 45)
	private String name;
	
	@NotBlank
	@Size(max = 45)
	private String uri;
	
	@NotBlank
	@Size(max = 45)
	private String icon;
	
}
