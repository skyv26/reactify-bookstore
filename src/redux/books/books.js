// Action Type
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Default Data
const initialState = [
  {
    item_id: 1,
    title: 'Game of Life',
    author: 'Mr. Secret',
    category: 'Suspense',
  },
  {
    item_id: 2,
    title: 'Awesome Guy',
    author: 'Miss Bethary',
    category: 'Biography',
  },
  {
    item_id: 3,
    title: 'Coding Jokes',
    author: 'Aakash Verma',
    category: 'Drama',
  },
  {
    item_id: 4,
    title: 'Uncertain Goal',
    author: 'Secretu',
    category: 'Comedy',
  },
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
    default: return state;
  }
};

export default booksReducer;
