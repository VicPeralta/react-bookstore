const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const GETBOOKLIST_BEGIN = 'bookstore/books/GETLISTBEGIN';
const GETBOOKLIST_SUCCESS = 'bookstore/books/GETLISTSUCCESS';

const initialState = {
  books: [
  ],
};

export function getBooksListSuccess(books) {
  return {
    type: GETBOOKLIST_SUCCESS,
    payload: books,
  };
}

export function getBooksList() {
  return (dispatch) => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0xSoJBB3AJG4eMvnXm4c/books';
    fetch(url).then((response) => (
      response.json().then((json) => {
        const books = Object.entries(json).map(([key, value]) => ({
          id: key,
          title: value[0].title,
          author: value[0].author,
          genre: value[0].category,
        }));
        dispatch(getBooksListSuccess(books));
      })));
  };
}

export function removeBook(id) {
  return (dispatch) => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0xSoJBB3AJG4eMvnXm4c/books';
    fetch(`${url}/${id.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      dispatch(getBooksList());
    });
  };
}

export function addBook(book) {
  return (dispatch) => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0xSoJBB3AJG4eMvnXm4c/books';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: 'Science Fiction',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      dispatch(getBooksList());
    });
  };
}

export function getBooksListBegin() {
  return {
    type: GETBOOKLIST_BEGIN,
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
    case GETBOOKLIST_SUCCESS:
      return {
        books: action.payload,
      };
    default: return state;
  }
}
