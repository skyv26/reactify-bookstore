import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const removeBookHandler = (id) => {
    dispatch(removeBook(id));
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
          <button type="button" onClick={() => { removeBookHandler(itemId); }}>Remove</button>
        </li>
      ))}
      ;
    </ul>
  );
};

export default Book;
