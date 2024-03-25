package com.eventmanagement.eventmanagement.Service;


import java.util.List;
import java.util.Optional;

import com.eventmanagement.eventmanagement.model.Book;

public interface BookService {

    List<Book> getAllBooks();

    Optional<Book> getBookById(Long id);

    Book saveBook(Book book);

    void deleteBook(Long id);
}
