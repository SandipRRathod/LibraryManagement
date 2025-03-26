export interface Book {
    id: number;
    bookId:string;
    title: string;
    author: string;
    genre: string;
    availabilityStatus: 'Available' | 'Checked Out';
  }
  