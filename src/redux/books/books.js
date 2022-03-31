const ADDBOOK_BEGIN = 'bookstore/books/ADDBEGIN';
const ADDBOOK_SUCCESS = 'bookstore/books/ADDSUCCESS';
const ADDBOOK_FAILURE = 'bookstore/books/ADDFAILURE';

const REMOVEBOOK_BEGIN = 'bookstore/books/REMOVEBEGIN';
const REMOVEBOOK_SUCCESS = 'bookstore/books/REMOVESUCCESS';
const REMOVEBOOK_FAILURE = 'bookstore/books/REMOVEFAILURE';

const GETBOOKLIST_BEGIN = 'bookstore/books/GETLISTBEGIN';
const GETBOOKLIST_SUCCESS = 'bookstore/books/GETLISTSUCCESS';
const GETBOOKLIST_FAILURE = 'bookstore/books/GETLISTFAILURE';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const APP_KEY = '0xSoJBB3AJG4eMvnXm4c';
const initialState = {
  books: [
  ],
};

export function getBooksListBegin() {
  return {
    type: GETBOOKLIST_BEGIN,
  };
}

export function getBooksListSuccess(books) {
  return {
    type: GETBOOKLIST_SUCCESS,
    payload: books,
  };
}

export function getBooksListFailure() {
  return {
    type: GETBOOKLIST_FAILURE,
  };
}

export function removeBookBegin() {
  return {
    type: REMOVEBOOK_BEGIN,
  };
}

export function removeBookFailure() {
  return {
    type: REMOVEBOOK_FAILURE,
  };
}

export function removeBookSuccess() {
  return {
    type: REMOVEBOOK_SUCCESS,
  };
}

export function addBookBegin() {
  return {
    type: ADDBOOK_BEGIN,
  };
}

export function addBookSuccess() {
  return {
    type: ADDBOOK_SUCCESS,
  };
}

export function addBookFailure() {
  return {
    type: ADDBOOK_FAILURE,
  };
}

export function getBooksList() {
  return (dispatch) => {
    const url = `${BASE_URL}${APP_KEY}/books`;
    dispatch(getBooksListBegin());
    fetch(url).then((response) => (
      response.json().then((json) => {
        const books = Object.entries(json).map(([key, value]) => ({
          id: key,
          title: value[0].title,
          author: value[0].author,
          genre: value[0].category,
        }));
        dispatch(getBooksListSuccess(books));
      }))).catch(() => dispatch(getBooksListFailure()));
  };
}

export function removeBook(id) {
  return (dispatch) => {
    const url = `${BASE_URL}${APP_KEY}/books`;
    dispatch(removeBookBegin());
    fetch(`${url}/${id.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      dispatch(removeBookSuccess());
      dispatch(getBooksList());
    }).catch(() => dispatch(removeBookFailure()));
  };
}

export function addBook(book) {
  return (dispatch) => {
    const url = `${BASE_URL}${APP_KEY}/books`;
    dispatch(addBookBegin());
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
      dispatch(addBookSuccess());
      dispatch(getBooksList());
    }).catch(() => dispatch(addBookFailure()));
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETBOOKLIST_SUCCESS:
      return {
        books: action.payload,
      };
    case GETBOOKLIST_BEGIN:
      // console.log('Do something while waiting');
      return state;
    default: return state;
  }
}
