import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private apiUrl = 'https://library-management-flax-three.vercel.app/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  getBookById(bookId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id/${bookId}`);
  }

  getBookByTitle(bookTitle: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/title/${bookTitle}`);
  }

  updateBook(id: number, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
