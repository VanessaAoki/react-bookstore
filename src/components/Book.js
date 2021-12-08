/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import BookButtons from './BookButtons';

const Book = ({
  item_id, title, category,
}) => (
  <li>
    <p className="book-category">{category}</p>
    <p className="book-title">{title}</p>
    <BookButtons item_id={item_id} />
  </li>
);

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
