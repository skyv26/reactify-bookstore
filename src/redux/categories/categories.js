// Action Type
const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

// Default state
const initialState = [];

// Action Creators
export const addCategories = (category) => ({
  type: ADD_CATEGORY,
  category,
});

export const removeCategories = (category) => ({
  type: REMOVE_CATEGORY,
  category,
});

