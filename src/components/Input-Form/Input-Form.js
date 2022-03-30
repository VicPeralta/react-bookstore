import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Input-Form.css';

const InputForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    if (author === '' || title === '') return;
    dispatch(addBook({ id: uuidv4(), title, author }));
    setTitle();
    setAuthor();
  };
  const onChange = (e) => {
    if (e.target.id === 'title') setTitle(e.target.value);
    else setAuthor(e.target.value);
  };
  return (
    <form className="input-form">
      <label htmlFor="title">
        <input type="text" name="title" id="title" required placeholder="Book title" value={title || ''} onChange={onChange} />
      </label>
      <label htmlFor="author">
        <input type="text" name="author" id="author" required placeholder="Author" value={author || ''} onChange={onChange} />
      </label>
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
