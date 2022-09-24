import { createAsyncThunk } from '@reduxjs/toolkit';

// Action Type
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ehEXJIZOdMZTzHuhOZWq/books';

// Default Data
const initialState = [
];

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

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

export const fetchBookThunk = createAsyncThunk(FETCH_BOOK, (action) => {
  const dispatch = action;
  fetch(API).then((response) => response.json()).then((data) => {
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    dispatch({
      type: FETCH_BOOK,
      payload: books,
    });
  });
});

// Books Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];

    case REMOVE_BOOK: return [
      ...state.filter((each) => each.item_id !== action.payload.item_id),
    ];

    case FETCH_BOOK:
      return [
        ...state,
        ...action.payload,
      ];
    default: return state;
  }
};

export default booksReducer;
