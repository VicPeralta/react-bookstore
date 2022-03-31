import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const myLogger = () => (next) => (action) => {
  // uncomment for debugging
  // console.info(action);
  next(action);
};
const store = createStore(reducer, {}, applyMiddleware(thunk, myLogger));
export default store;
