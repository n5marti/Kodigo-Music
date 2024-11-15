// src/components/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Kodigo Music</div>
      <input type="text" className="search-bar" placeholder="Search..." />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/playlists">Playlists</a></li>
        <li><a href="/library">Library</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
