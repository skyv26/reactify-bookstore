import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBook, removeBook } from '../books/books';

// ACTION TYPES
const ADD_BOOK = 'books/api/newBook';
const REMOVE_BOOK = 'books/api/removeBook';
const FETCH_BOOK = 'books/api/fetchBook';

// API
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ehEXJIZOdMZTzHuhOZWq/books';

// InitialState

const initialState = {};

export const addBookThunk = createAsyncThunk(ADD_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  dispatch(addBook(payload));
})());

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(`${API}/${payload.item_id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(payload));
})());

export const fetchBookThunk = createAsyncThunk(FETCH_BOOK, async () => {
  const data = await fetch(API)();
  return data;
});

const reduxThunk = (state = initialState, action) => {
  let payload = null;
  if (action.type.includes('fulfilled')) {
    payload = action.meta.arg;
    payload = JSON.stringify(payload);
  }
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return {
        ...state,
        payload,
      };
    case `${REMOVE_BOOK}/fulfilled`: return {
      // ...state.filter((each) => each.item_id !== payload.item_id),
    };
    case `${FETCH_BOOK}/fulfilled`: return {
      ...state,
      payload,
    };
    default: return state;
  }
};

export default reduxThunk;
