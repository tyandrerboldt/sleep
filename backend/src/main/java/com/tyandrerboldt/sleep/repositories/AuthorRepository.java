package com.tyandrerboldt.sleep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tyandrerboldt.sleep.entities.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
