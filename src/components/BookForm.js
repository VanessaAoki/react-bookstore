/* eslint-disable camelcase */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { fetchAddBook } from '../redux/books/books';
import './BookForm.css';

const categories = [
  'Adventure',
  'Action',
  'Graphic Novel',
  'Mystery',
  'Horror',
  'Fantasy',
  'Romance',
  'Sci-Fi',
  'Technical',
];

const BookForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    category: 'Adventure',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitBookToStore = () => {
    const item_id = uuidv4();
    const { title, category } = state;
    const newBook = {
      item_id,
      title,
      category,
    };
    dispatch(fetchAddBook(newBook));
    setState(() => ({
      title: '',
      category: 'Adventure',
    }));
  };
  return (
    <div>
      <h3 className="form-title">Add new Book</h3>
      <div className="form-container">
        <form
          className="book-form"
          onSubmit={(e) => {
            e.preventDefault();
            submitBookToStore();
          }}
        >
          <input className="book-title-input" type="text" value={state.title} name="title" onChange={handleChange} placeholder="Enter title of book" required />
          <select className="book-genre-input" name="category" value={state.category} onChange={handleChange}>
            {
              categories.map((category) => (
                <option key={uuidv4()} value={category}>{category}</option>
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
