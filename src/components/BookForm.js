import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const genres = [
  'Adventure',
  'Action',
  'Graphic Novel',
  'Mystery',
  'Fantasy',
  'Romance',
  'Sci-Fi',
];

const BookForm = () => (
  <>
    <h3 className="form-title">Add new Book</h3>
    <div className="form-container">
      <form className="book-form" action="submit">
        <input type="text" name="book-title-input" id="book-title" className="book-title-input" placeholder="Book title" required />
        <select className="book-genre-input">
          {
          genres.map((genre) => (
            <option key={uuidv4()} value={genre}>{genre}</option>
          ))
        }
        </select>
        <button type="button" className="book-form-button">Add Book</button>
      </form>
    </div>
  </>
);

export default BookForm;
