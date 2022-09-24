import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBook } from "../books/books";

// ACTION TYPES
const ADD_BOOK = 'books/api/newBook';
const REMOVE_BOOK = 'books/api/removeBook';
const FETCH_BOOK = 'books/api/fetchBook';

// API
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ehEXJIZOdMZTzHuhOZWq/books';

export const addBookThunk = createAsyncThunk(ADD_BOOK, async (action) => {
  const { payload, dispatch } = action;
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })();
  dispatch(addBook(payload));
});
