import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
];

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialState,
  },
  reducers: {
    removeBook: (state, action) => {
      const newBooks = state.books.filter((book) => (book.id !== action.payload.id));
      return {
        books: newBooks,
      };
    },
    addBook: (state, action) => (
      {
        books: [
          ...state.books,
          {
            id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
          },
        ],
      }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
