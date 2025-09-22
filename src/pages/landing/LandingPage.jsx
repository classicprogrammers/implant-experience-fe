import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
import '../../App.css';
import '../../assets/css/landing.css';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Top Header Bar */}
      <div className="landing-top-banner">
        <span className="landing-banner-text">THE IMPLANT EXPERIENCE</span>
      </div>

      {/* Header */}
      <header className="landing-header">
        <div className="landing-nav-container container">
          <div className="landing-logo">
            <span className="landing-logo-implant">THE IMPLANT</span>
            <span className="landing-logo-experience">EXPERIENCE</span>
          </div>

          <nav className="landing-nav-menu">
            <div className="landing-nav-item active">
              <div className="landing-nav-dot"></div>
              <span>Home</span>
            </div>
            <div className="landing-nav-item">
              <span>About</span>
            </div>
            <div className="landing-nav-item">
              <span>Resource</span>
            </div>
            <div className="landing-nav-item">
              <span>Newsletter</span>
            </div>
          </nav>

          <div className="landing-auth-buttons">
            <Link to="/login" className="landing-btn-login">Login</Link>
            <Link to="/signup" className="landing-btn-member">Become a Member</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-hero-section">
        <div className="landing-hero-container container">
          <div className="landing-hero-badge">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/2070a485fbad4155ad7801fd58b79b8ebd585062?width=298" alt="Badge" className="landing-badge-img" />
          </div>

          <div className="landing-hero-section-content">
            <h2 className="landing-hero-subtitle">Stay Informed. Stay Protected.</h2>
            <h1 className="landing-hero-title">
              Your <span className="landing-highlight-underline">Devices.</span><br />
              Your Data.
            </h1>
            <p className="landing-hero-description">
              Get real-time updates about your device status, data access, and health compliance — all in one place.
            </p>

            <div className="landing-hero-cta">
              <Link to="/signup" className="landing-cta-button">Become a Member</Link>
              <div className="landing-navigation-arrows">
                <button className="landing-nav-arrow prev">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M44 0.5H6C2.96243 0.5 0.5 2.96243 0.5 6V44C0.5 47.0376 2.96243 49.5 6 49.5H44C47.0376 49.5 49.5 47.0376 49.5 44V6C49.5 2.96243 47.0376 0.5 44 0.5Z" stroke="white" strokeOpacity="0.12" />
                    <path d="M32 24.9996H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25 19L19 25L25 31" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="landing-nav-arrow next">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M44 0H6C2.68629 0 0 2.68629 0 6V44C0 47.3137 2.68629 50 6 50H44C47.3137 50 50 47.3137 50 44V6C50 2.68629 47.3137 0 44 0Z" fill="white" fillOpacity="0.2" />
                    <path d="M19 25.0004H31" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26 31L32 25L26 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Feature Bar */}
      <footer className="landing-footer">
        <div className="landing-footer-container">
          <div className="landing-footer-brand">
            <span className="landing-footer-implant">THE IMPLANT</span>
            <span className="landing-footer-experience">EXPERIENCE</span>
          </div>

          <div className="landing-footer-contact">
            <h3 className="landing-footer-contact-title">Contact Us</h3>

            <div className="landing-contact-item">
              <div className="landing-contact-icon">
                <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                  <path d="M3.90625 15.6248L9.46633 19.6167C9.7874 19.8472 10.2126 19.8472 10.5337 19.6167L16.0937 15.6248M4.375 25.8332H15.625C16.6605 25.8332 17.5 24.9626 17.5 23.8887V16.111C17.5 15.0371 16.6605 14.1665 15.625 14.1665H4.375C3.33947 14.1665 2.5 15.0371 2.5 16.111V23.8887C2.5 24.9626 3.33947 25.8332 4.375 25.8332Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>info@domain.com</span>
            </div>

            <div className="landing-contact-item">
              <div className="landing-contact-icon">
                <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                  <path d="M17.2202 25.6423C17.2202 25.6423 16.2547 26.5906 16.018 26.8687C15.6325 27.28 15.1784 27.4742 14.5831 27.4742C14.5258 27.4742 14.4647 27.4742 14.4075 27.4704C13.274 27.3981 12.2207 26.9563 11.4307 26.5792C9.27058 25.5356 7.37385 24.0541 5.79764 22.1764C4.49624 20.6111 3.6261 19.1638 3.04982 17.6099C2.6949 16.6616 2.56514 15.9227 2.62238 15.2257C2.66055 14.7801 2.83228 14.4107 3.14905 14.0945L4.45044 12.7958C4.63745 12.6206 4.8359 12.5254 5.03054 12.5254C5.27098 12.5254 5.46561 12.6701 5.58774 12.792C5.59156 12.7958 5.59537 12.7996 5.59919 12.8034C5.83199 13.0205 6.05334 13.2452 6.28614 13.4852C6.40445 13.607 6.52658 13.7289 6.6487 13.8546L7.69058 14.8944C8.09512 15.2981 8.09512 15.6713 7.69058 16.075C7.57992 16.1855 7.47305 16.2959 7.36238 16.4026C7.04178 16.7301 7.29365 16.4788 6.96158 16.7759C6.95398 16.7835 6.94632 16.7873 6.94252 16.7949C6.6143 17.1225 6.67538 17.4424 6.74405 17.6595C6.74785 17.6709 6.75172 17.6823 6.75552 17.6937C7.02645 18.3488 7.40812 18.9658 7.98818 19.7009L7.99205 19.7047C9.04538 20.9996 10.1559 22.0089 11.381 22.7821C11.5375 22.8811 11.6978 22.9611 11.8505 23.0372C11.9878 23.1058 12.1176 23.1705 12.2283 23.2391C12.2435 23.2467 12.2588 23.2581 12.2741 23.2657C12.4038 23.3305 12.5259 23.3609 12.6519 23.3609C12.9687 23.3609 13.1671 23.1629 13.232 23.0981L13.9801 22.3516C14.1098 22.2221 14.3159 22.066 14.5563 22.066C14.7929 22.066 14.9876 22.2145 15.1059 22.344C15.1097 22.3478 15.1097 22.3478 15.1135 22.3516L17.2164 24.4502C17.6095 24.8387 17.2202 25.6423 17.2202 25.6423Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>+1 (213) 465 789</span>
            </div>

            <div className="landing-contact-item">
              <div className="landing-contact-icon">
                <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                  <path d="M9.99912 28C9.99912 28 16.2601 22.4348 16.2601 18.2609C16.2601 14.8031 13.4569 12 9.99912 12C6.54137 12 3.73828 14.8031 3.73828 18.2609C3.73828 22.4348 9.99912 28 9.99912 28Z" stroke="white" strokeWidth="1.33333" />
                  <path d="M12.0002 18C12.0002 19.1045 11.1048 20 10.0002 20C8.89565 20 8.00018 19.1045 8.00018 18C8.00018 16.8954 8.89565 16 10.0002 16C11.1048 16 12.0002 16.8954 12.0002 18Z" stroke="white" strokeWidth="1.33333" />
                </svg>
              </div>
              <span>-</span>
            </div>
          </div>

          <div className="landing-footer-social">
            <div className="landing-social-icons">
              <div className="landing-social-icon">
                <span>f</span>
              </div>
              <div className="landing-social-icon">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M14.4807 0.21875H12.1428C11.4866 0.21875 10.8948 0.324219 10.3674 0.535156C9.82837 0.734375 9.37134 1.02734 8.99634 1.41406C8.62134 1.80078 8.33423 2.26953 8.13501 2.82031C7.93579 3.35938 7.83618 3.96875 7.83618 4.64844V6.6875H5.48071C5.37524 6.6875 5.28735 6.72266 5.21704 6.79297C5.14673 6.86328 5.11157 6.95117 5.11157 7.05664V10.0098C5.11157 10.1152 5.14673 10.2031 5.21704 10.2734C5.28735 10.3438 5.37524 10.3789 5.48071 10.3789H7.83618V17.8496C7.83618 17.9551 7.87134 18.043 7.94165 18.1133C8.01196 18.1836 8.09399 18.2188 8.18774 18.2188H11.2639C11.3577 18.2188 11.4426 18.1836 11.5188 18.1133C11.595 18.043 11.6331 17.9551 11.6331 17.8496V10.3789H14.3752C14.469 10.3789 14.554 10.3438 14.6301 10.2734C14.7063 10.2031 14.7444 10.1152 14.7444 10.0098V7.05664C14.7444 7.00977 14.7327 6.96289 14.7092 6.91602C14.6858 6.86914 14.6565 6.82812 14.6213 6.79297C14.5979 6.75781 14.5627 6.73145 14.5159 6.71387C14.469 6.69629 14.4221 6.6875 14.3752 6.6875H11.6331V4.96484C11.6331 4.54297 11.7092 4.22656 11.8616 4.01562C12.0139 3.80469 12.3596 3.69922 12.8987 3.69922H14.4807C14.5862 3.69922 14.6741 3.66406 14.7444 3.59375C14.8147 3.52344 14.8499 3.43555 14.8499 3.33008V0.587891C14.8499 0.482422 14.8147 0.394531 14.7444 0.324219C14.6741 0.253906 14.5862 0.21875 14.4807 0.21875Z" fill="white" />
                </svg>
              </div>
              <div className="landing-social-icon">
                <span>t</span>
              </div>
            </div>
          </div>

          <div className="landing-footer-bottom">
            <div className="landing-footer-links">
              <span>Copyright © 2025 All Rights Reserved.</span>
            </div>
            <div className="landing-footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default LandingPage