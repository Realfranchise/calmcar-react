import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <span>Global Offices: Shanghai | Seoul | Detroit | Stuttgart</span>
            <span>🌐 KR | EN | CN</span>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <img 
              src="/images/Title_logo.png" 
              alt="CalmCar Logo" 
              className="logo" 
              style={{ filter: 'none', opacity: 1 }} 
            />
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#solutions" onClick={closeMobileMenu}>Solutions</a></li>
              <li><a href="#technology" onClick={closeMobileMenu}>Technology</a></li>
              <li><a href="#products" onClick={closeMobileMenu}>Products</a></li>
              <li><a href="#resources" onClick={closeMobileMenu}>Resources</a></li>
              <li><a href="#partners" onClick={closeMobileMenu}>Partners</a></li>
            </ul>
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="btn btn-ghost">Request Demo</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;