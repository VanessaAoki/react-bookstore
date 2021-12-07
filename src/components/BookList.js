import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      <ul className="book-list">
        {
          booksList.map((bookObj) => (
            <Book
              key={bookObj.id}
              id={bookObj.id}
              title={bookObj.title}
              author={bookObj.author}
              genre={bookObj.genre}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default BookList;
