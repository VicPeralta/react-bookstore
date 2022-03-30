const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = {
  books: [
    {
      id: '1',
      author: 'Suzanne Collins',
      title: 'The Hunger Games',
    },
    {
      id: '2',
      author: 'Frank Herbert',
      title: 'Dune',
    },
  ],
};

export function addBook(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        books: [
          ...state.books,
          {
            id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
          },
        ],
      };
    case REMOVE:
      return {
        books: state.books.filter((book) => (book.id !== action.payload.id)),
      };
    default: return state;
  }
}
