import React from 'react';

const book = ({ title, author, genre }) => (
  <li>
    <p className="book-genre">{genre}</p>
    <p className="book-title">{title}</p>
    <p className="book-author">{author}</p>
    <button className="book-button" type="button">
      Remove
    </button>
    <button className="book-button" type="button">
      Edit
    </button>
    <button className="book-button book-button-last" type="button">
      Comments
    </button>
  </li>
);

export default book;
