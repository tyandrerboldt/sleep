package com.tyandrerboldt.sleep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyandrerboldt.sleep.entities.Music;

public interface MusicRepository extends JpaRepository<Music, Long> {

}
