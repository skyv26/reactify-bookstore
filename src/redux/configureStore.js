import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
});

export default rootReducer;
