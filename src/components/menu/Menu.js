import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? '-active menu-link' : 'menu-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/food"
        className={({ isActive }) =>
          isActive ? '-active menu-link' : 'menu-link'
        }
      >
        Food
      </NavLink>
      <NavLink
        to="/drinks"
        className={({ isActive }) =>
          isActive ? '-active menu-link' : 'menu-link'
        }
      >
        Drinks
      </NavLink>
    </nav>
  );
};

export default Menu;
