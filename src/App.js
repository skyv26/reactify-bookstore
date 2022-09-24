import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import { fetchBookThunk } from './redux/books/books';
import AddBook from './components/AddBook/AddBook';
import Categories from './components/Categories/Categories';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookThunk(dispatch));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/books" render={() => <Navigate to="/" />} />
      </Routes>
      {/* <AddBook /> */}
    </>
  );
};

export default App;
