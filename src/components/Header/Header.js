import React from 'react';
import { ImUser } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <>
    <header className={style.Header}>
      <h1 className={style.Logo}>Bookstore CMS</h1>
      <nav className={style.Navigation}>
        <ul className={style.UnorderedList}>
          <li className={style.List}>
            <NavLink to="/" className={({ isActive }) => `${style.Link} ${(isActive ? style.Active : '')}`} end>Books</NavLink>
          </li>
          <li className={style.List}>
            <NavLink to="/categories" className={({ isActive }) => `${style.Link} ${(isActive ? style.Active : '')}`}>Categories</NavLink>
          </li>
        </ul>
      </nav>
      <button type="button" className={style.Oval}>
        <ImUser />
      </button>
    </header>
  </>
);

export default Header;
