package com.eventmanagement.eventmanagement.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventmanagement.eventmanagement.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}