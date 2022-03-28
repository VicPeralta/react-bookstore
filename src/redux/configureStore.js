import { createStore, combineReducers } from 'redux';
import * as Books from './books/books';
import * as Categories from './categories/categories';

const rootReducer = combineReducers(Books.default, Categories.default);
const store = createStore(rootReducer);

export default store;
