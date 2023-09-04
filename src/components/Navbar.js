import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href={window.location.href}>
        <img
          src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
          alt="F1 Logo"
          className="nav-logo"
          style={{ width: '80px', height: '50px' }}
        />
      </a>

      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/overview" className="nav-link">
            Overview
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/content" className="nav-link">
            Content
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

