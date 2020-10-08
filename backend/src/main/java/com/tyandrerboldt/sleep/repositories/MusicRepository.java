package com.tyandrerboldt.sleep.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tyandrerboldt.sleep.entities.Music;

public interface MusicRepository extends JpaRepository<Music, Long> {
	
	@Query("from Music music "
			+ "join fetch music.categories "
			+ "join fetch music.authors "
			+ "where music.id = :musicId")
	Optional<Music> findById(@Param("musicId") Long musicId);
}
