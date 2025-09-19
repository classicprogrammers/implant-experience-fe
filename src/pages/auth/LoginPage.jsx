import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiEye, HiEyeOff, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import '../../assets/css/AuthPage.css'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData)
      setIsLoading(false)
      // For now, just navigate to dashboard
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <>
      <div className="auth-page-new">
        <div className="auth-container-new">
          <h1 className="page-title">Sign in to your account</h1>

          <div className="auth-card">
            <div className="auth-tabs">
              <button className="tab active">Sign In</button>
              <Link to="/signup" className="tab">Sign Up</Link>
            </div>

            <form onSubmit={handleSubmit} className="auth-form-new">
              <div className="form-group-new">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
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
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <Link to="/forgot-password">Forgot passwod?</Link>
              </div>

              <button
                type="submit"
                className="btn-signin"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign in'}
              </button>

              <div className="divider">
                <span>Or</span>
              </div>

              <button type="button" className="btn-google">
                Sign in with google
              </button>

              <div className="forgot-password">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </form>
          </div>

        </div>
      </div>
      <footer className="auth-footer-new">
        <div className="container">
          <div className="footer-left">
            <span>© 2025 yourapp.com</span>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-right">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LoginPage
