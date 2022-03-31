import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Input-Form.css';

const InputForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Action');
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    if (author === '' || title === '') return;
    dispatch(addBook(
      {
        id: uuidv4(), title, author, genre,
      },
    ));
    setTitle();
    setAuthor();
  };
  const onChange = (e) => {
    if (e.target.id === 'title') setTitle(e.target.value);
    else setAuthor(e.target.value);
  };
  return (
    <form className="input-form">
      <input type="text" name="title" id="title" required placeholder="Book title" value={title || ''} onChange={onChange} />
      <input type="text" name="author" id="author" required placeholder="Author" value={author || ''} onChange={onChange} />
      <select name="select" value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Action" selected>Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Science-Fiction">Science-Fiction</option>
        <option value="Thriller">Thriller</option>
      </select>
      <button
        aria-label="submit"
        type="submit"
        name="submit"
        id="submit"
        onClick={addNewBook}
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default InputForm;
