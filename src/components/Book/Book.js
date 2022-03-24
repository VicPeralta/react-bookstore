import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { genre, author, title } = props;
  return (
    <div className="book">
      <p>{genre}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <ul>
        <li><button type="button">Comments </button></li>
        <li><button type="button">Remove </button></li>
        <li><button type="button">Edit </button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
