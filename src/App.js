import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import AddBook from './components/AddBook/AddBook';
import Categories from './components/Categories/Categories';
import './App.css';

const App = () => (
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

export default App;
