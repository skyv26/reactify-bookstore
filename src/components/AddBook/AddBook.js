import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book/Book';
import style from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [currentBookObj, updateBookObj] = useState({
    id: null,
    title: null,
    author: null,
  });
  const bookAuthorRef = useRef();
  const bookTitleRef = useRef();

  const addBookHandler = (e) => {
    e.preventDefault();
    const author = bookAuthorRef.current.value;
    const title = bookTitleRef.current.value;
    updateBookObj((prevState) => ({
      ...prevState,
      title,
      author,
    }));
  };

  return (
    <>
      <Book />
      <div className={style.FormContainer}>
        <p className={style.FormHeading}>add new book</p>
        <form className={style.AddBookForm} onSubmit={(e) => { addBookHandler(e); }}>
          <input type="text" className={style.Input} ref={bookTitleRef} placeholder="Book Title" />
          <input type="text" className={style.Input} ref={bookAuthorRef} placeholder="Author" />
          <button type="submit" className={style.Input}>add book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
