import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookThunk } from '../../redux/books/books';
import Book from '../Book/Book';
import style from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [currentBookObj, updateBookObj] = useState({
    item_id: null,
    title: null,
    author: null,
    category: 'ACTION',
  });
  const bookAuthorRef = useRef(currentBookObj.author);
  const bookTitleRef = useRef(currentBookObj.title);

  const inputHandler = () => {
    const author = bookAuthorRef.current.value;
    const title = bookTitleRef.current.value;
    const itemId = uuidv4();
    updateBookObj((prevState) => ({
      ...prevState,
      title,
      author,
      item_id: itemId,
    }));
  };

  const addBookHandler = async (e) => {
    e.preventDefault();
    dispatch(addBookThunk({ payload: currentBookObj, dispatch }));
  };

  return (
    <div className={style.Main}>
      <Book />
      <hr />
      <div className={style.FormContainer}>
        <p className={style.FormHeading}>add new book</p>
        <form
          className={style.AddBookForm}
          onChange={inputHandler}
          onSubmit={(e) => { addBookHandler(e); }}
        >
          <input type="text" className={style.Input} ref={bookTitleRef} placeholder="Book Title" />
          <input type="text" className={style.Input} ref={bookAuthorRef} placeholder="Author" />
          <button type="submit" className={style.Input}>add book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
