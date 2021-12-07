import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div>
      <button className="book-button" type="button" onClick={() => removeBookFromStore(id)}>
        Remove
      </button>
      <button className="book-button" type="button">
        Edit
      </button>
      <button className="book-button book-button-last" type="button">
        Comments
      </button>
    </div>
  );
};

BookActions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BookActions;