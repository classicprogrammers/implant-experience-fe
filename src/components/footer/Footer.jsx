import React from 'react';
import './Footer.css';
import logo from '../../assets/images/footerLogo.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section className="relative" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
        {/* Teal Block */}
        <div className="bg-[#00ACB2] py-[40px] px-[4px] sm:px-[6px] lg:px-[8px]">
          <div className="max-w-7xl mx-auto">
            <div className="stay-in-touch-container" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {/* Left Content Block */}
              <div className="stay-in-touch-content" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {/* Top Line Text */}
                <p className="stay-in-touch-subtitle" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span className="text-[#1D2939]">SUBSCRIBE NOW</span>
                  <span className="text-white"> TO OUR NEWSLETTER</span>
                </p>

                {/* Main Heading */}
                <h2 className="stay-in-touch-title" style={{ fontFamily: 'Bebas Neue, sans-serif', lineHeight: '1' }}>
                  STAY IN TOUCH
                </h2>
              </div>

              {/* Right Content Block - Subscription Form */}
              <div className="w-full lg:w-auto flex custom-justify-start">
                <div className="flex bg-white rounded-[50px] overflow-hidden shadow-lg w-full max-w-[560px] lg:w-[500px]" style={{fontFamily: 'mulish'}}>
                  {/* Email Input Field */}
                  <input
                    type="email"
                    placeholder="Your email ..."
                    className="px-[20px] py-[12px] text-base text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none w-full h-[58px] flex-1"
                  />

                  {/* Subscribe Button */}
                  <button className="px-[42px] py-[12px] bg-[#1D2939] text-white text-base font-medium hover:bg-[#002850] transition-colors duration-200 flex items-center justify-center gap-[8px] h-[58px] flex-shrink-0 rounded-[50px]">
                    Subscribe
                    <span className="text-white text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <footer className="footer">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-image" />
        </div>

        <hr style={{ borderTop: '0.5px solid #ededed3b', margin: '0px 0 60px' }} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-[15px]">
          <div className="footer-columns">
            {/* Left Column */}
            <div className="footer-left flex-col">
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
            <div className="footer-right flex-col">
              {/* Contact Us Section */}
              <div className="footer-section">
                <h3 className="section-heading">CONTACT US</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon-circle"><FaEnvelope /></span>
                    <span>info@domain.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon-circle"><FaPhone /></span>
                    <span>+1 (213) 465 789</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon-circle"><FaMapMarkerAlt /></span>
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

        <div className="flex items-center justify-center gap-3">
          <hr style={{ borderTop: '1px solid #ededed3b', width: '100%' }}></hr>
          <div className="social-icons">
            <div className="social-icon"><FaGlobe /></div>
            <div className="social-icon"><FaFacebookF /></div>
            <div className="social-icon"><FaInstagram /></div>
          </div>
          <hr style={{ borderTop: '1px solid #ededed3b', width: '100%' }}></hr>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content max-w-7xl mx-auto px-[15px]">
            <div className="footer-bottom-left">
              <span>Copyright © 2025 All Rights Reserved.</span>
            </div>

            <div className="footer-bottom-right">
              <span>Privacy Policy</span>
              <span className="separator">•</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
