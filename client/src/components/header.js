import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import '../styles/popup.css';
import Button from '../components/button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Please enter email and password.");
      return;
    }

    try {
      const response = await fetch(`https://localhost:44383/api/User/Login?Email=${encodeURIComponent(email)}&Password=${encodeURIComponent(password)}`, {
        method: 'POST',
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
        <nav className='header-block'>
          <ul className='profile'>
            <li className='name'>Guiter Kaksha</li>
          </ul>
          <div className='header-content'>
            <ul className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="/" onClick={closeMenu}>Home</a></li>
              <li><a href="/#about" onClick={closeMenu}>About</a></li>
              <li><a href="/#projects" onClick={closeMenu}>Courses</a></li>
            </ul>
            <div className='mobile-login'>
              <a href="#login" onClick={(e) => { e.preventDefault(); toggleLoginModal(); }}>Login</a>
            </div>
            <div className='desktop-login'>
              <Button label="Login" onClick={toggleLoginModal} />
            </div>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </div>
        </nav>
      </header>

      {showLoginModal && (
        <div className="modal-overlay" onClick={toggleLoginModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
