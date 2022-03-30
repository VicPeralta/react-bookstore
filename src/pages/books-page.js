/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from '../components/Books/Books';
import InputForm from '../components/Input-Form/Input-Form';
import { getBooksList } from '../redux/books/books';
import './books-page.css';

const BooksPage = () => {
  const books = useSelector((state) => (state.bookReducer.books));
  return (
    <>
      <Books books={books} />
      <h2>ADD NEW BOOK</h2>
      <InputForm />
    </>
  );
};

export default BooksPage;
