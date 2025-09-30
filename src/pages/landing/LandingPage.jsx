import { Link } from 'react-router-dom'
import '../../App.css';
import '../../assets/css/landing.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import logo from '../../assets/images/implant-logo.png';
import badge from '../../assets/images/landingHero.png';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header Component */}
      <Header variant="landing" />

      <section className="landing-hero-section">
        <div className="landing-hero-container container">
          <div className="landing-hero-badge">
            <img src={badge} alt="Badge" className="landing-badge-img" />
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
      {/*  */}
      <marquee behavior="" direction="left" className='bg-[#00ACB2] block'>
        <div className="landing-marquee-container">
          <div className="landing-marquee-item">
            <img src={logo} alt="Logo" className="landing-marquee-img" />
          </div>
        </div>
      </marquee>
      <Footer />
    </div >
  )
}

export default LandingPage