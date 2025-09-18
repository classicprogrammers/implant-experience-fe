import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AuthPage.css'

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup attempt:', formData)
      setIsLoading(false)
      // For now, just navigate to dashboard
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <div className="auth-page-new">
      <div className="auth-container-new">
        <h1 className="page-title">Sign in to your account</h1>
        
        <div className="auth-card">
          <div className="auth-tabs">
            <Link to="/login" className="tab">Sign In</Link>
            <button className="tab active">Sign Up</button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form-new">
            <div className="form-row">
              <div className="form-group-new">
                <label htmlFor="Name"> Name</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="input your first name"
                />
              </div>

              {/* <div className="form-group-new">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="input your last name"
                />
              </div> */}
            </div>

            <div className="form-group-new">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="input your email in here"
              />
            </div>

            <div className="form-group-new">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="input your password in here"
                  minLength="6"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-group-new">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="confirm your password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the <Link to="/terms" className="link">Terms of Service</Link> and <Link to="/privacy" className="link">Privacy Policy</Link></span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-signin"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Sign up'}
            </button>

            <div className="divider">
              <span>Or</span>
            </div>

            <button type="button" className="btn-google">
              Sign up with google
            </button>
          </form>
        </div>

        <footer className="auth-footer-new">
          <div className="footer-left">
            <span>© 2005 yoursup.com</span>
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

export default SignupPage
