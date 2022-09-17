import React from 'react';
import style from './Header.module.css';

const Header = () => (
  <>
    <header className={style.Header}>
      <nav className={style.Navigation}>
        <ul className={style.UnorderedList}>
          <li className={style.List}>
            Books
          </li>
          <li className={style.List}>
            Categories
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
