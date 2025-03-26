package com.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.Entity.Book;
import com.library.service.BookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
@CrossOrigin
public class LibraryController {

	@Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
    

    @GetMapping("/id/{bookId}")
    public ResponseEntity<Book> getBookById(@PathVariable String bookId) {
        return bookService.getBookById(bookId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/title/{bookTitle}")
    public ResponseEntity<?> getBookByTitle(@PathVariable String bookTitle) {
    	
    	List<Book> l=bookService.searchBooksByTitle(bookTitle);
    	
    	if (l.isEmpty()) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Books With This Title");
		}
    	
        return ResponseEntity.ok(l);
    }

    @PostMapping
    public ResponseEntity<?> addBook(@Valid @RequestBody Book book) {
        
    	try {
    		return ResponseEntity.ok(bookService.addBook(book)); //try for if the bookid present present throw exception 
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This Book Id Is Alredy Existed..!");
		}
       
    }


    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) {
        return ResponseEntity.ok(bookService.updateBook(id, book));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
