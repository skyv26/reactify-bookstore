import React from 'react';
import { useSelector } from 'react-redux';
import style from './Book.module.css';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul className={style.BookContainer}>
      { books.map((each) => (
        <li key={each.id} className={style.BookList}>
          <p className={style.BookDetail}>
            {`${each.title}
            by `}
            <span>{each.author}</span>
          </p>
          <button type="button">Remove</button>
        </li>
      ))}
      ;
    </ul>
  );
};

export default Book;
