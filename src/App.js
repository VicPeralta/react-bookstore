import { HashRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import BooksPage from './pages/books-page';
import CategoriesPage from './pages/categories-page';
import './App.css';
import { getBooksList } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => (
    dispatch(getBooksList())
  ), []);
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
