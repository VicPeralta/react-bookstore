import './Book.css';

const Book = () => (
  <div className="book">
    <p>Action</p>
    <h3>The Hunger Games</h3>
    <p>Suzanne Collins</p>
    <ul>
      <li><button type="button">Comments </button></li>
      <li><button type="button">Remove </button></li>
      <li><button type="button">Edit </button></li>
    </ul>
  </div>
);

export default Book;
