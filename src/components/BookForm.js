import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../redux/books/books';

const genres = [
  'Adventure',
  'Action',
  'Graphic Novel',
  'Mystery',
  'Fantasy',
  'Romance',
  'Sci-Fi',
];

const BookForm = () => {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);
  const updateGenre = (e) => setGenre(e.target.value);

  const addNewBook = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (title && author) {
      createBookAction({
        title,
        author,
        genre,
        id,
      });
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };

  return (
    <div>
      <h3 className="form-title">Add new Book</h3>
      <div className="form-container">
        <form
          className="book-form"
          onSubmit={addNewBook}
        >
          <input type="text" value={title} name="title" className="book-title-input" onChange={updateTitle} placeholder="Enter title of book" required />
          <input type="text" value={author} name="author" className="book-author-input" onChange={updateAuthor} placeholder="Enter author of book" required />
          <select className="book-genre-input" name="genre" value={genre} onChange={updateGenre}>
            {
              genres.map((genre) => (
                <option key={uuidv4()} value={genre}>{genre}</option>
              ))
            }
          </select>
          <button type="submit" className="book-form-button">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
