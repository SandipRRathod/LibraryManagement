package com.library.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.Entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

	 Optional<Book> findByBookId(String bookId); //custom finder methods
	 List<Book> findByTitleContaining(String title);
}
