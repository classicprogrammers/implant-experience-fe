import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPage.css'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset request for:', email)
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="auth-page-new">
        <div className="auth-container-new">
          <h1 className="page-title">Check your email</h1>
          
          <div className="auth-card">
            <div className="success-message">
              <div className="success-icon">📧</div>
              <h2>Password reset link sent!</h2>
              <p>
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your email and follow the instructions to reset your password.
              </p>
              <p className="help-text">
                Didn't receive the email? Check your spam folder or 
                <button 
                  className="resend-link" 
                  onClick={() => setIsSubmitted(false)}
                >
                  try again
                </button>
              </p>
            </div>
          </div>

          <footer className="auth-footer-new">
            <div className="footer-left">
              <span>© 2025 yourapp.com</span>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-right">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </footer>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-page-new">
      <div className="auth-container-new">
        <h1 className="page-title">Reset your password</h1>
        
        <div className="auth-card">
          <div className="auth-tabs">
            <Link to="/login" className="tab">Sign In</Link>
            <Link to="/signup" className="tab">Sign Up</Link>
          </div>

          <form onSubmit={handleSubmit} className="auth-form-new">
            <div className="form-group-new">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="input your email in here"
              />
            </div>

            <p className="help-text">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>

            <button 
              type="submit" 
              className="btn-signin"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send reset link'}
            </button>

            <div className="back-to-login">
              <Link to="/login" className="back-link">
                ← Back to Sign In
              </Link>
            </div>
          </form>
        </div>

        <footer className="auth-footer-new">
          <div className="footer-left">
            <span>© 2025 yourapp.com</span>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-right">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
