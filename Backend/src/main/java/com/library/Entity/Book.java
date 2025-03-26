package com.library.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
public class Book {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank(message = "Book Id cannot be empty")
    private String bookId;

    @Column(nullable = false)
    @NotBlank(message = "Title cannot be empty")
    private String title;

    @Column(nullable = false)
    @NotBlank(message = "Author cannot be empty")
    private String author;

    private String genre;
    private String availabilityStatus;
}
