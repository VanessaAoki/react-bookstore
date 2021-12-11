/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import BookButtons from './BookButtons';
import './BookList.css';

const Book = ({
  item_id, title, category,
}) => (
  <li>
    <section className="book-info">
      <p className="book-category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">By Vanessa</p>
      <BookButtons item_id={item_id} />
    </section>
    <section className="completed">
      <div className="oval-2" />
      <div>
        <p className="percentage">0%</p>
        <span className="percentage-text">Completed</span>
      </div>
    </section>
    <section className="chapter-info">
      <div className="current-chapter">Current Chapter</div>
      <div className="chapter">Chapter 3</div>
      <button type="submit" className="chapter-button">Update Progress</button>
    </section>
  </li>
);

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
