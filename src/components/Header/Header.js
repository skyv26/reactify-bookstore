import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <>
    <header className={style.Header}>
      <h1 className={style.Logo}>Bookstore CMS</h1>
      <nav className={style.Navigation}>
        <ul className={style.UnorderedList}>
          <li className={style.List}>
            <NavLink to="/" className={({ isActive }) => `${style.Link} ${(isActive ? 'active' : '')}`} end>Books</NavLink>
          </li>
          <li className={style.List}>
            <NavLink to="/categories" className={({ isActive }) => `${style.Link} ${(isActive ? 'active' : '')}`}>Categories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
