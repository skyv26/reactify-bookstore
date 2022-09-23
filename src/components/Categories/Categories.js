import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Categories = () => {
  const [status, updateStatus] = useState(false);
  const [category] = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const checkStatusHandler = () => {
    updateStatus((prevState) => !prevState);
    dispatch({ type: '' });
  };

  return (
    <>
      <button type="button" onClick={checkStatusHandler}>Check Status</button>
      { status ? <p>{category.text}</p> : null }
    </>
  );
};

export default Categories;
