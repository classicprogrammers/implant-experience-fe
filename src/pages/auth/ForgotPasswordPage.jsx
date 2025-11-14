import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { api } from '../../utils/api'
import '../../App.css'
import AuthHeader from'../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter';

function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [validationErrors, setValidationErrors] = useState({})

  const validateForm = () => {
    const errors = {}

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    return errors
  }

  const handleChange = (e) => {
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
      // Prepare data for API
      const forgotPasswordData = {
        email: formData.email.trim()
      }

      // Call the forgot password API
      const response = await api.post('/auth/forgot-password', forgotPasswordData)

      if (response.data.success) {
        console.log('Password reset email sent:', response.data)
        // Navigate to verify OTP page
        navigate('/verify-otp')
      } else {
        setError(response.data.message || 'Failed to send password reset email')
      }
    } catch (error) {
      console.error('Forgot password error:', error)

      // Extract error message from response
      let errorMessage = 'An error occurred while sending password reset email'

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
          <div className="auth-card py-[35px]">
            <div className="forgot-password-header flex items-center gap-[10px] justify-center relative mb-2">
              <Link to="/login" className="back-arrow absolute left-[15px]" style={{ border: '1px solid #E1E1E1', borderRadius: '8px', padding: '10px' }}>
                <IoIosArrowBack style={{ fontSize: '24px', color: '#9A9AB0' }} />
              </Link>
              <h1 className="forgot-password-title">Forgot Password</h1>
            </div>

            <div className="forgot-password-content">
              {!success && (
                <div className='px-[40px] text-center'>
                  <p className="instruction-text mb-2">
                    Enter the email address you used when you joined and we'll send you instructions to reset your password.
                  </p>
                  <p className="security-note">
                    For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.
                  </p>
                </div>
              )}

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
                    padding: '16px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    fontSize: '15px',
                    fontWeight: '500',
                    textAlign: 'center',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{ marginBottom: '8px', fontSize: '20px' }}>📧</div>
                    <div style={{ fontWeight: '600', marginBottom: '8px' }}>Email Sent Successfully!</div>
                    <div>{success}</div>
                  </div>
                )}

                {!success && (
                  <>
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

                    <button
                      type="submit"
                      className="btn-signin"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Reset'}
                    </button>
                  </>
                )}

                {success && (
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link
                      to="/login"
                      className="btn-signin"
                      style={{
                        display: 'inline-block',
                        textDecoration: 'none',
                        textAlign: 'center'
                      }}
                    >
                      Go to Login
                    </Link>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* AuthFooter */}
      <AuthFooter />
    </>
  )
}

export default ForgotPasswordPage