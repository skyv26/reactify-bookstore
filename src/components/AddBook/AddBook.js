import React from 'react';
import Book from '../Book/Book';
import style from './AddBook.module.css';

const AddBook = () => (
  <>
    <Book />
    <div className={style.FormContainer}>
      <p className={style.FormHeading}>add new book</p>
      <form className={style.AddBookForm}>
        <input type="text" className={style.Input} placeholder="Book Title" />
        <input type="text" className={style.Input} placeholder="Author" />
        <button type="submit" className={style.Input}>add book</button>
      </form>
    </div>
  </>
);

export default AddBook;
