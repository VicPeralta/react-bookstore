import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
  },
];

const NavBar = () => (
  <nav className="NavBar">
    <div className="left">
      <h1>Bookstore CMS</h1>
      <div>
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            style={{ isActive: 'active-link' }}
            className="link"
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
    <div className="right">
      <p>login</p>
    </div>
  </nav>
);

export default NavBar;
