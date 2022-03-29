import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/booksSlice';
import './Book.css';

const Book = (props) => {
  const {
    id, genre, author, title,
  } = props;
  const dispatch = useDispatch();
  const onRemove = (e) => {
    const bookid = e.target.dataset.id;
    dispatch(removeBook({ id: bookid }));
  };

  return (
    <div className="book">
      <p className="book-genre">{genre}</p>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <ul>
        <li><button type="button">Comments </button></li>
        <li><button type="button" data-id={id} onClick={onRemove}>Remove </button></li>
        <li><button type="button">Edit </button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
