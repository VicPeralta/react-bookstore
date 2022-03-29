// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import * as Books from './books/books';
// import * as Categories from './categories/categories';
import bookReducer from './books/booksSlice';

// const rootReducer = combineReducers({ books: Books.default, categories: Categories.default });
const store = configureStore({ reducer: bookReducer });

export default store;
