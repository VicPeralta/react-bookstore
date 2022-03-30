import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(reducer);

export default store;
