package com.tyandrerboldt.sleep.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_music", uniqueConstraints = @UniqueConstraint(columnNames = {"uuid"}))
public class Music implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String uuid;
	@Size(max = 100)
	@NotBlank
	private String title;
	@Column(columnDefinition = "TEXT")
	private String description;
	@NotNull
	private Double duration;
	@NotNull
	private String filePath;
	private String imagePath;

	@ManyToMany
	@JoinTable(name = "tb_music_category", joinColumns = @JoinColumn(name = "music_id"), inverseJoinColumns = @JoinColumn(name = "category_id"))
	Set<Category> categories = new HashSet<>();
	
	@ManyToMany
	@JoinTable(name = "tb_music_author", joinColumns = @JoinColumn(name = "music_id"), inverseJoinColumns = @JoinColumn(name = "author_id"))
	Set<Author> authors = new HashSet<>();

	public Music() {
	}

	public Music(Long id, String uuid, String title, String description, Double duration, String filePath,
			String imagePath) {
		super();
		this.id = id;
		this.uuid = uuid;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.filePath = filePath;
		this.imagePath = imagePath;
	}
	
	@PrePersist
	public void prePersist() {
		uuid = UUID.randomUUID().toString();
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

	public Set<Category> getCategories() {
		return categories;
	}
	
	public Set<Author> getAuthors() {
		return authors;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Music other = (Music) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
