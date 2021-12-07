import React from 'react';
import PropTypes from 'prop-types';
import BookButtons from './BookButtons';

const Book = ({
  id, title, author, genre,
}) => (
  <li>
    <p className="book-genre">{genre}</p>
    <p className="book-title">{title}</p>
    <p className="book-author">{author}</p>
    <BookButtons id={id} />
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Book;
