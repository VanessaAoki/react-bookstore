import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const demoBooks = [
  { title: 'The Hunger Games', author: 'Suzzane Collins', genre: 'Action' },
  { title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi' },
];

const BookList = () => (
  <>
    <ul className="book-list">
      {
      demoBooks.map((demoBooks) => (
        <Book
          key={uuidv4()}
          title={demoBooks.title}
          author={demoBooks.author}
          genre={demoBooks.genre}
        />
      ))
    }
    </ul>
  </>
);

export default BookList;
