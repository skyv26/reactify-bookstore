import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import reduxThunk from './reduxThunk/reduxThunk';

const rootReducer = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
    reduxThunk,
  },
});

export default rootReducer;
