import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Link, NavLink,
} from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <h1><Link to="/books">Bookstore CMS</Link></h1>
      <ul id="navbar">
        <li><NavLink to="/books">books</NavLink></li>
        <li><NavLink to="/categories">categories</NavLink></li>
      </ul>
    </nav>
    <section>
      <FontAwesomeIcon className="user-icon" icon={faUser} />
    </section>
  </header>
);

export default Header;
