// Action Type
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Default Data
const initialState = [
  {
    id: 1,
    title: 'Game of Life',
    author: 'Mr. Secret',
  },
  {
    id: 2,
    title: 'Awesome Guy',
    author: 'Miss Bethary',
  },
  {
    id: 3,
    title: 'Coding Jokes',
    author: 'Aakash Verma',
  },
  {
    id: 4,
    title: 'Uncertain Goal',
    author: 'Secretu',
  },
];

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

// Books Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];
    case REMOVE_BOOK: return [
      ...state.filter((each) => each.id !== action.payload.id),
    ];
    default: return state;
  }
};

export default booksReducer;
