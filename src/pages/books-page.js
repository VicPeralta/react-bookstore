import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Books from '../components/Books/Books';
import InputForm from '../components/Input-Form/Input-Form';
import { addBook } from '../redux/books/booksSlice';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const submitHandler = (title, author) => {
    dispatch(addBook({ id: uuidv4(), title, author }));
  };

  return (
    <>
      <Books books={books} />
      <InputForm onSubmit={submitHandler} />
    </>
  );
};

export default BooksPage;
