/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteBook } from '../redux/books/books';

const BookActions = ({ item_id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (bookId) => {
    dispatch(fetchDeleteBook(bookId));
  };
  return (
    <div>
      <button className="book-button" type="button" onClick={() => removeBookFromStore(item_id)}>
        Remove
      </button>
      <button className="book-button" type="button">
        Edit
      </button>
      <button className="book-button" type="button">
        Comments
      </button>
    </div>
  );
};

BookActions.propTypes = {
  item_id: PropTypes.string.isRequired,
};

export default BookActions;
