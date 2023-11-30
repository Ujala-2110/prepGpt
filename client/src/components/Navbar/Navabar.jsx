import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>
      <div className="right-section">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li>
            {/* <div className="search-bar">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
