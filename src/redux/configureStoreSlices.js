import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});
const store = configureStore({ reducer });

export default store;
