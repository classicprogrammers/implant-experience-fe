import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiEye, HiEyeOff, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import { api } from '../../utils/api'
import AuthHeader from'../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import '../../App.css'

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organizationName: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [validationErrors, setValidationErrors] = useState({})
  const navigate = useNavigate()

  const setAuthData = (data) => {
    localStorage.setItem('authToken', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  const validateForm = () => {
    const errors = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    // Organization name validation
    if (!formData.organizationName.trim()) {
      errors.organizationName = 'Organization name is required'
    }

    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    // Terms validation
    if (!agreeToTerms) {
      errors.terms = 'You must agree to the Terms of Service'
    }

    return errors
  }

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setAgreeToTerms(e.target.checked)
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
      // Clear validation error for this field
      if (validationErrors[e.target.name]) {
        setValidationErrors({
          ...validationErrors,
          [e.target.name]: ''
        })
      }
    }
    // Clear general error when user starts typing
    if (error) {
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    setValidationErrors({})

    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setIsLoading(false)
      return
    }

    try {
      // Prepare data for API - only send required fields
      const signupData = {
        email: formData.email.trim(),
        password: formData.password,
        fullName: formData.name.trim(),
        role: 'patient', // Default role for new signups
        organizationName: formData.organizationName.trim()
      }

      // Call the registration API
      const response = await api.post('/auth/register', signupData)

      if (response.data.success) {
        // Store auth data in localStorage
        setAuthData(response.data.data)

        console.log('Registration successful:', response.data.data)
        setSuccess(response.data.message || 'Registration successful!')

        // Navigate to OCR page after a short delay to show success message
        setTimeout(() => {
          navigate('/ocr')
        }, 1500)
      } else {
        setError(response.data.message || 'Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)

      // Extract error message from response
      let errorMessage = 'An error occurred during registration'

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error
      } else if (error.message) {
        errorMessage = error.message
      }

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <AuthHeader />
      <div className="auth-page-new">
        <div className="auth-container-new">
          <h1 className="page-title">Sign up to your account</h1>

          <div className="auth-card">
            <div className="auth-tabs">
              <Link to="/login" className="tab">Sign In</Link>
              <button className="tab active">Sign Up</button>
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

              {success && (
                <div className="success-message" style={{
                  color: '#059669',
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  padding: '12px',
                  borderRadius: '6px',
                  marginBottom: '16px',
                  fontSize: '14px'
                }}>
                  {success}
                </div>
              )}

              <div className="form-group-new">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="input your name in here"
                  className={validationErrors.name ? 'error' : ''}
                />
                {validationErrors.name && (
                  <span className="field-error" style={{
                    color: '#ef4444',
                    fontSize: '12px',
                    marginTop: '4px',
                    display: 'block'
                  }}>
                    {validationErrors.name}
                  </span>
                )}
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
                  className={validationErrors.email ? 'error' : ''}
                />
                {validationErrors.email && (
                  <span className="field-error" style={{
                    color: '#ef4444',
                    fontSize: '12px',
                    marginTop: '4px',
                    display: 'block'
                  }}>
                    {validationErrors.email}
                  </span>
                )}
              </div>

              <div className="form-group-new">
                <label htmlFor="organizationName">Organization Name</label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                  placeholder="input your organization name in here"
                  className={validationErrors.organizationName ? 'error' : ''}
                />
                {validationErrors.organizationName && (
                  <span className="field-error" style={{
                    color: '#ef4444',
                    fontSize: '12px',
                    marginTop: '4px',
                    display: 'block'
                  }}>
                    {validationErrors.organizationName}
                  </span>
                )}
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
                    className={validationErrors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                  </button>
                </div>
                {validationErrors.password && (
                  <span className="field-error" style={{
                    color: '#ef4444',
                    fontSize: '12px',
                    marginTop: '4px',
                    display: 'block'
                  }}>
                    {validationErrors.password}
                  </span>
                )}
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
                    placeholder="input your password in here"
                    className={validationErrors.confirmPassword ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                  </button>
                </div>
                {validationErrors.confirmPassword && (
                  <span className="field-error" style={{
                    color: '#ef4444',
                    fontSize: '12px',
                    marginTop: '4px',
                    display: 'block'
                  }}>
                    {validationErrors.confirmPassword}
                  </span>
                )}
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
                {validationErrors.terms && (
                  <span className="field-error" style={{
                    color: '#ef4444',
                    fontSize: '12px',
                    marginTop: '4px',
                    display: 'block'
                  }}>
                    {validationErrors.terms}
                  </span>
                )}
              </div>

              <div className='flex gap-[15px] flex-col'>
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
              </div>

            </form>
          </div>

        </div>
      </div>
      <AuthFooter />
    </>
  )
}

export default SignUpPage