const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const INITIAL_STATE = [];

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

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: 1,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE:
      return state.filter((book) => (book.id !== action.payload.id));
    default: return state;
  }
}
