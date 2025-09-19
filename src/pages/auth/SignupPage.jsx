import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiEye, HiEyeOff, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import '../../assets/css/AuthPage.css'

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setAgreeToTerms(e.target.checked)
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
    <>
      <div className="auth-page-new">
        <div className="auth-container-new">
          <h1 className="page-title">Sign up to your account</h1>

          <div className="auth-card">
            <div className="auth-tabs">
              <Link to="/login" className="tab">Sign In</Link>
              <button className="tab active">Sign Up</button>
            </div>

            <form onSubmit={handleSubmit} className="auth-form-new">
              <div className="form-group-new">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
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
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                  </button>
                </div>
              </div>

              <div className="terms-checkbox">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreeToTerms">I have read and agree to the Terms of Service</label>
              </div>

              <button
                type="submit"
                className="btn-signin"
                disabled={isLoading || !agreeToTerms}
              >
                {isLoading ? 'Signing Up...' : 'Sign up'}
              </button>

              <div className="divider">
                <span>Or</span>
              </div>

              <Link to="/login" className="btn-google">
                Login
              </Link>
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

export default SignUpPage