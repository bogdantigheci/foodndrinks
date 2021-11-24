import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <Link to="/" className="link">
          Food
        </Link>
        <Link to="/drinks" className="link">
          Drinks
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
