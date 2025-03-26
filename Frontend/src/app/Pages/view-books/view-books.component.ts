import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { LibraryService } from '../../services/library.service';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,FormsModule],
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent {

  books: Book[] = [];

  selectedBook!: Book;
  actionType:string=''

  constructor(private service :LibraryService){
    this.getBooks();
  }
  
  getBooks(){
    this.service.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  updateBook(){
    this.service.updateBook(this.selectedBook?.id,this.selectedBook).subscribe(resp=>{
      alert('Updated');
      window.location.reload();
    }
    );
  }

  deleteBook(){
this.service.deleteBook(this.selectedBook.id).subscribe(
  resp=>{
    alert("Deleted..");
    window.location.reload();
  }
);
  }

  openModal(book: Book,action:any): void {
    this.selectedBook = book;
    this.actionType = action;
  }

}
