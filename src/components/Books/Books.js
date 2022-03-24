import Book from '../Book/Book';
import './Books.css';

const Books = () => (
  <div className="books-container">
    <Book title="The Hunger Games" author="Suzanne Collins" genre="Action" />
    <Book title="Dune" author="Frank Herbert" genre="Science Fiction" />
  </div>
);

export default Books;
