import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const removeBookHandler = (obj) => {
    dispatch(removeBook(obj));
  };
  return (
    <ul className={style.BookContainer}>
      { books.map((each) => (
        <li key={each.id} className={style.BookList}>
          <p className={style.BookDetail}>
            {`${each.title}
            by `}
            <span>{each.author}</span>
          </p>
          <button type="button" onClick={() => { removeBookHandler(each); }}>Remove</button>
        </li>
      ))}
      ;
    </ul>
  );
};

export default Book;
