import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiEye, HiEyeOff, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import { api } from '../../utils/api'
import '../../App.css'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Auth functions inside the component
  const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  }

  const setAuthData = (data) => {
    localStorage.setItem('authToken', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Call the login API
      const response = await login(formData)

      if (response.success) {
        // Store auth data in localStorage
        setAuthData(response.data)

        console.log('Login successful:', response.data)

        // Navigate to dashboard
        navigate('/dashboard')
      } else {
        setError(response.message || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError(error.message || 'An error occurred during login')
    } finally {
      setIsLoading(false)
    }
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
              {error && (
                <div className="error-message" style={{
                  color: '#ef4444',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  padding: '12px',
                  borderRadius: '6px',
                  marginBottom: '16px',
                  fontSize: '14px'
                }}>
                  {error}
                </div>
              )}

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

              <div className='flex gap-[15px] flex-col'>
                <button
                  type="submit"
                  className="btn-signin"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>

                <div className="divider">
                  <span>Or</span>
                </div>

                <button type="button" className="btn-google">
                  Sign in with google
                </button>
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
