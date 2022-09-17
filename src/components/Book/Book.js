import React from 'react';
import PropTypes from 'prop-types';
import style from './Book.module.css';

const Book = ({ title = 'Code Life', author = 'Aakash Verma' }) => (
  <ul className={style.BookContainer}>
    <li className={style.BookList}>
      <p className={style.BookDetail}>
        {`${title}
         by `}
        <span>{author}</span>
      </p>
      <button type="button">Remove</button>
    </li>
  </ul>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
