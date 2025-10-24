import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/implant-logo.png';
import avatarImage from '../../assets/images/avatar.jpg';

const Header = ({ variant = 'landing' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate(); // 👈 Hook for navigation

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    closeMobileMenu();

    // Add navigation ///
    if (tabName === 'Home') navigate('/');
    else if (tabName === 'Resource') navigate('/resource');
    else if (tabName === 'Newsletter') navigate('/newsletter');
    else if (tabName === 'About') navigate('/about');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (variant === 'dashboard') {
    // Dashboard header with search and user info
    return (
      <div className="implant-header implant-header-dashboard">
        {/* Mobile Menu Button */}
        <div className="implant-mobile-menu-button" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Search Bar */}
        <div className="implant-search-container">
          <div className="implant-search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="implant-search-input"
          />
        </div>

        {/* Right Side - User Info */}
        <div className="implant-user-section">
          {/* Notification Bell */}
          <div className="implant-notification-bell">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* User Avatar */}
          <div className="implant-user-avatar">
            <img src={avatarImage} alt="User Avatar" className="implant-avatar-image" />
          </div>

          {/* User Info */}
          <div className="implant-user-info">
            <div className="implant-user-name">Franklin Astiy</div>
            <div className="implant-user-role">Receptionist</div>
          </div>

          {/* Dropdown Arrow */}
          <div className="implant-dropdown-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Landing page header
  return (
    <div className="implant-header implant-header-landing">
      {/* Top Banner */}
      <div className="implant-header-banner">
        <span className="implant-banner-text">THE IMPLANT EXPERIENCE</span>
      </div>

      {/* Main Header */}
      <div className="implant-header-main">
        <div className="implant-header-container">
          <div className="implant-header-logo">
            <img src={logo} alt="Logo" className="implant-logo-img" />
          </div>

          <nav className={`implant-header-nav ${isMobileMenuOpen ? 'implant-mobile-open' : ''}`} ref={mobileMenuRef}>
            <div className="implant-nav-items">
              {/* Close Button */}
              {isMobileMenuOpen && (
                <div className="implant-mobile-close-btn" onClick={closeMobileMenu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div
                className={`implant-nav-item ${activeTab === 'Home' ? 'implant-nav-item-active' : ''}`}
                onClick={() => handleTabClick('Home')}
              >
                {activeTab === 'Home' && <div className="implant-nav-dot"></div>}
                <span>Home</span>
              </div>
              <div
                className={`implant-nav-item ${activeTab === 'About' ? 'implant-nav-item-active' : ''}`}
                onClick={() => handleTabClick('About')}
              >
                {activeTab === 'About' && <div className="implant-nav-dot"></div>}
                <span>About</span>
              </div>
              <div
                className={`implant-nav-item ${activeTab === 'Resource' ? 'implant-nav-item-active' : ''}`}
                onClick={() => handleTabClick('Resource')}
              >
                {activeTab === 'Resource' && <div className="implant-nav-dot"></div>}
                <span>Resource</span>
              </div>
              <div
                className={`implant-nav-item ${activeTab === 'Newsletter' ? 'implant-nav-item-active' : ''}`}
                onClick={() => handleTabClick('Newsletter')}
              >
                {activeTab === 'Newsletter' && <div className="implant-nav-dot"></div>}
                <span>Newsletter</span>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="implant-mobile-auth-buttons">
                <Link to="/login" className="implant-btn-login" onClick={closeMobileMenu}>Login</Link>
                <Link to="/signup" className="implant-btn-member" onClick={closeMobileMenu}>Become a Member</Link>
              </div>
            </div>
          </nav>

          <div className="implant-header-auth-buttons">
            <Link to="/login" className="implant-btn-login">Login</Link>
            <Link to="/signup" className="implant-btn-member">Become a Member</Link>
          </div>

          <div className={`implant-mobile-menu-toggle ${isMobileMenuOpen ? 'implant-active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="implant-mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </div>
  );
};

export default Header;
