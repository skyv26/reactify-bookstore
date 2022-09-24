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
      { books.map(({
        item_id: itemId,
        category,
        title,
        author,
      }) => (
        <li key={itemId} className={style.BookList}>
          <div className={style.AboutBook}>
            <div className={style.BookInfo}>
              <p className={style.Category}>{category}</p>
              <p className={style.BookInfoWith}>
                {title}
                <span className={style.Author}>{author}</span>
              </p>
            </div>
            <ul className={style.BookOperation}>
              <li className={style.Operate}>
                <button type="button" className={style.Operation}>Comments</button>
              </li>
              <li className={style.Operate}>
                <button type="button" className={style.Operation} onClick={() => { removeBookHandler({ item_id: itemId }); }}>Remove</button>
              </li>
              <li className={style.Operate}>
                <button type="button" className={style.Operation}>Edit</button>
              </li>
            </ul>
          </div>
          <div className={style.ProgressCircle}>
            <div className={style.Circle} />
            <p className={style.Rate}>
              64%
              <span className={style.Mark}>Completed</span>
            </p>
          </div>

          <div className={style.ChapterStatus}>
            <div className={style.Status}>
              <p className={style.Chapter}>Current Chapter</p>
              <p className={style.ChapterNumber}>Chapter 3: &quot;A Lesson Learned &quot;</p>
            </div>
            <button type="button" className={style.ProgressUp}>UPDATE PROGRESS</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Book;
