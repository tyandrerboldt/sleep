package com.tyandrerboldt.sleep.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tyandrerboldt.sleep.domain.entities.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
