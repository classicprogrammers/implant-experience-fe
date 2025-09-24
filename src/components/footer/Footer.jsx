import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
        <div className="logo-container">
          <div className="logo-icon">
            <div className="heart-shape">
              <div className="bone-shape"></div>
            </div>
          </div>
          <div className="logo-text">
            <div className="logo-line-1">THE IMPLANT</div>
            <div className="logo-line-2">EXPERIENCE</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="footer-content">
        <div className="footer-columns">
          {/* Left Column */}
          <div className="footer-left">
            {/* About Us Section */}
            <div className="footer-section">
              <h3 className="section-heading">ABOUT US</h3>
              <p className="section-text">
                The Implant Experience emerged from the collective frustration of individuals working inside the healthcare ecosystem who witnessed too many preventable device tragedies.
              </p>
            </div>

            {/* Our Promise Section */}
            <div className="footer-section">
              <h3 className="section-heading">OUR PROMISE</h3>
              <p className="section-text">
                We promise to be your unwavering advocate in the complex world of medical devices. To deliver information without bias, to fight for transparency without compromise, and to ensure that no patient ever has to say, 'I wish I had known sooner.'
              </p>
            </div>

            {/* Device Data Section */}
            <div className="footer-section">
              <h3 className="section-heading">YOUR DEVICE DATA BELONGS TO YOU</h3>
              <button className="claim-button">CLAIM IT TODAY</button>
            </div>
          </div>

          {/* Right Column */}
          <div className="footer-right">
            {/* Contact Us Section */}
            <div className="footer-section">
              <h3 className="section-heading">CONTACT US</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <span>info@domain.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (213) 465 789</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🛡</span>
                  <span>-</span>
                </div>
              </div>
            </div>

            {/* Contact Message Section */}
            <div className="footer-section">
              <h3 className="section-heading">CONTACT MESSAGE</h3>
              <p className="section-text">
                Need help accessing your unique device information? Have questions about your implant? We're here to listen, support, and act. Because every patient's experience matters in our fight for safer medical devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <span>Copyright © 2025 All Rights Reserved.</span>
          </div>
          
          <div className="footer-bottom-center">
            <div className="social-icons">
              <div className="social-icon">🌐</div>
              <div className="social-icon">f</div>
              <div className="social-icon">📷</div>
            </div>
          </div>
          
          <div className="footer-bottom-right">
            <span>Privacy Policy</span>
            <span className="separator">•</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
