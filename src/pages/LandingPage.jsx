import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
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
              <span>THE IMPLANT EXPERIENCE</span>
            </div>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/resource" className="nav-link">Resource</Link>
            <Link to="/newsletter" className="nav-link">Newsletter</Link>
          </div>
          <div className="nav-actions">
            <Link to="/login" className="btn btn-teal">Login</Link>
            <Link to="/signup" className="btn btn-dark-blue">Become a Member</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero-section">

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
    </div>
  )
}

export default LandingPage
