import { Routes } from '@angular/router';
import { ViewBooksComponent } from './Pages/view-books/view-books.component';
import { AddBookComponent } from './Pages/add-book/add-book.component';
import { SearchBookComponent } from './Pages/search-book/search-book.component';

export const routes: Routes = [
   { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: ViewBooksComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'search', component: SearchBookComponent },
];
