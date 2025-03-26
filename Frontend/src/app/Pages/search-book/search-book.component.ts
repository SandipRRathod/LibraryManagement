import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { FormsModule } from '@angular/forms';
import { iif } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-search-book',
  standalone: true,
  imports: [CommonModule,NgIf,FormsModule],
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.css'
})
export class SearchBookComponent {
  searchType: string = '';
  searchValue: string='';
  books: Book[] = [];
  errorMessage: string = '';

  constructor(private bookService: LibraryService) {}

  searchBook() {
    this.errorMessage = '';

    if(this.searchType==='id'){
      this.bookService.getBookById(this.searchValue).subscribe(
        (resp) => {
          this.books = resp ? [resp] : [];;
        },
        (err) => {
          this.errorMessage = err.error || 'Book not found';
        }
      );
     

    }else {
      this.bookService.getBookByTitle(this.searchValue).subscribe(
        (resp) => {
          this.books = resp;
        },
        (err) => {
          this.errorMessage = err.error || 'No books found with this title';
        }
      );
    }
  
   
  }
}
