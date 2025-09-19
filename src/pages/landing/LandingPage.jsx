import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../../App.css'

function LandingPage() {
  // Temporarily removed animations to test basic rendering

  return (
    <div className="landing-page">
      {/* Top Header Bar */}
      <div className="top-header">
        <span>THE IMPLANT EXPERIENCE</span>
      </div>

      {/* Main Navigation */}
      <header className="main-header">
        <nav className="nav">
          <div className="nav-brand">
            <div className="logo">
              <div className="logo-icon">❤️</div>
              <span className=" bg-red-100 p-2 rounded">THE IMPLANT EXPERIENCE</span>
            </div>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/resource" className="nav-link">Resource</Link>
            <Link to="/newsletter" className="nav-link">Newsletter</Link>
          </div>
          <div className="nav-actions"></div>
          <Link to="/login" className="btn btn-teal">Login</Link>
          <Link to="/signup" className="btn btn-dark-blue">Become a Member</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Revolutionizing Implant Care</h1>
            <h2 className="hero-subtitle">Advanced Technology for Better Outcomes</h2>
            <p className="hero-description">
              Experience the future of implant management with our cutting-edge platform. 
              Track, monitor, and optimize your implant procedures with real-time data and insights.
            </p>
            <div className="hero-actions">
              <Link to="/login" className="btn btn-primary">Get Started</Link>
              <Link to="/contact" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="hero-metric">
              <span className="metric-number">98.5%</span>
              <span className="metric-label">Success Rate</span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="operating-room">
                  <div className="room-icon">🏥</div>
                  <h3>Modern Operating Room</h3>
                  <p>State-of-the-art facilities for implant procedures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Feature Bar */}
      <footer className="feature-bar">
        <div className="feature-content">
          <span>Trusted Care</span>
          <span className="separator">*</span>
          <span>Affordable Access</span>
          <span className="separator">*</span>
          <span>Real-Time Updates</span>
        </div>
      </footer>
    </div >
  )
}

export default LandingPage
