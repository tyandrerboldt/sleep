package com.tyandrerboldt.sleep.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_music")
public class Music {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	private Long id;	
	@Size(max = 36)
	@NotBlank
	private String uuid;	
	@Size(max = 100)
	@NotBlank
	private String title;	
	private String description;	
	@NotNull
	private Double duration;	
	@NotNull
	private String filePath;	
	private String imgPath;		
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;	
	
	@ManyToMany
	@JoinTable(name = "tb_music_author",
			joinColumns = @JoinColumn(name = "music_id"),
			inverseJoinColumns = @JoinColumn(name = "author_id"))
	Set<Category> authors = new HashSet<>();
	
}
