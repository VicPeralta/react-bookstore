import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Books from '../components/Books/Books';
import InputForm from '../components/Input-Form/Input-Form';
import { addBook } from '../redux/books/booksSlice';
import './books-page.css';

const BooksPage = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const submitHandler = (title, author) => {
    dispatch(addBook({ id: uuidv4(), title, author }));
  };
  if (!Array.isArray(books)) {
    return (
      <>
        <InputForm onSubmit={submitHandler} />
      </>
    );
  }

  return (
    <>
      <Books books={books} />
      <h2>ADD NEW BOOK</h2>
      <InputForm onSubmit={submitHandler} />
    </>
  );
};

export default BooksPage;
