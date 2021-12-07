import React from 'react';
import {
  Link, NavLink,
} from 'react-router-dom';

const Header = () => (
  <header>
    <h1><Link to="/books">Bookstore CMS</Link></h1>
    <nav>
      <ul id="navbar">
        <li><NavLink activeClassName="highlight" to="/books">books</NavLink></li>
        <li><NavLink activeClassName="highlight" to="/categories">categories</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
