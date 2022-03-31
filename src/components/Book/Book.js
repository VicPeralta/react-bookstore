import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';
import './Book.css';

const Book = (props) => {
  const {
    id, genre, author, title,
  } = props;
  const dispatch = useDispatch();
  const onRemoveBook = (event) => {
    const bookid = event.target.dataset.id;
    dispatch(removeBook({ id: bookid }));
  };

  return (
    <div className="book">
      <div className="left">
        <p className="book-genre">{genre}</p>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <ul>
          <li><button type="button">Comments </button></li>
          <li><button type="button" data-id={id} onClick={onRemoveBook}>Remove </button></li>
          <li><button type="button">Edit </button></li>
        </ul>
      </div>
      <div className="right">
        <div className="progress">
          <div className="circle" />
          <div>
            <p className="percent">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr />
        <div className="current-info">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter"> Chapter 3: &quot;A Lesson Learned&quot;</p>
          <button type="button" className="blue-button">UPDATE PROGRESS</button>
        </div>
      </div>
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
