import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookThunk } from '../../redux/books/books';
// import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const removeBookHandler = (obj) => {
    dispatch(removeBookThunk({ payload: obj, dispatch }));
  };

  return (
    <ul className={style.BookContainer}>
      { books.map(({ item_id: itemId, title, author }) => (
        <li key={itemId} className={style.BookList}>
          <p className={style.BookDetail}>
            {`${title}
            by `}
            <span>{author}</span>
          </p>
          <button type="button" onClick={() => { removeBookHandler({ item_id: itemId }); }}>Remove</button>
        </li>
      ))}
      ;
    </ul>
  );
};

export default Book;
