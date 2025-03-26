import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  book={
    bookId:'',
    title: '',
    author: '',
    genre: '',
    availabilityStatus: 'Available'
  };

  constructor(private service:LibraryService){}


  addBook(){
    if (this.book.title===''||this.book.author===''||this.book.bookId==='') {
      alert("Fill All The Inputs..!");
    } else {
      this.service.addBook(this.book).subscribe(
        (respone)=>{
          alert(respone.title+' Added Suucesfully..!');
        },
        (error)=>{
        alert(error?.error)
        });
    }

  }

}
