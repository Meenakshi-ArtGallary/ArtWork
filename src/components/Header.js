import React, { useState } from 'react';
import './Header.css';

function Header({ setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // Close menu on mobile after click
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Meenakshi Art Gallery</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => handleMenuClick('home')}>Home</button></li>
            <li><button onClick={() => handleMenuClick('main')}>Tanjore</button></li>
            <li><button onClick={() => handleMenuClick('tool')}>Madhubani</button></li>
            <li><button onClick={() => handleMenuClick('contact')}>Contact Us</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;