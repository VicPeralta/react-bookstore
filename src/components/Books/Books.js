import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './Books.css';

const Books = ({ books }) => (
  <>
    {books.length !== 0
      && (
        <div className="books-container">
          {
            books.map((book) => (
              <Book
                title={book.title}
                key={book.id}
                author={book.author}
                id={book.id}
                genre={book.genre}
              />
            ))
          }
        </div>
      )}
    {books.length === 0
      && (
        <h2 className="books-container">There are no books to manage</h2>
      )}
  </>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};
export default Books;
