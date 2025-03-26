package com.library.service;

import com.library.Entity.Book;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.repo.BookRepository;

@Service
public class BookService {
	
	@Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll(); //returning all books 
    }
    
    public Optional<Book> getById(long Id) {
        return bookRepository.findById(Id); //returning book by id
    }

    public Optional<Book> getBookById(String bookId) {
        return bookRepository.findByBookId(bookId); //returning book by book id
    }

    public List<Book> searchBooksByTitle(String title) {
        return bookRepository.findByTitleContaining(title); //returning book by title 
    }

    public Book addBook(Book book) {
        return bookRepository.save(book); //simply adding book
    }

    public Book updateBook(Long id, Book bookDetails) {
        Book book = bookRepository.findById(id).orElseThrow();
        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setGenre(bookDetails.getGenre());
        book.setAvailabilityStatus(bookDetails.getAvailabilityStatus());
        return bookRepository.save(book); //updating book
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id); //and deleting book
    }

}
