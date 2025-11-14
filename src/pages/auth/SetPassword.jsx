import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { api } from '../../utils/api'
import '../../App.css'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter';

function SetPasswordPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})

  const validateForm = () => {
    const errors = {}

    // Password validation
    if (!formData.password.trim()) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    // Confirm password validation
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
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
      const resetPasswordData = {
        password: formData.password.trim(),
        confirmPassword: formData.confirmPassword.trim()
      }

      // Call the change password API
      const response = await api.post('/auth/change-password', resetPasswordData)

      if (response.data.success) {
        console.log('Password reset successfully:', response.data)
        setShowSuccessModal(true)
      } else {
        setError(response.data.message || 'Failed to reset password')
      }
    } catch (error) {
      console.error('Reset password error:', error)

      // Extract error message from response
      let errorMessage = 'An error occurred while resetting password'

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

  const handleSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <AuthHeader />
      <div className="auth-page-new">
        <div className="auth-container-new">
          <div className="auth-card py-[35px]">
            <div className="setpassword-header flex items-center gap-[10px] justify-center relative mb-2">
              <Link to="/login" className="back-arrow absolute left-[15px]" style={{ border: '1px solid #E1E1E1', borderRadius: '8px', padding: '10px' }}>
                <IoIosArrowBack style={{ fontSize: '24px', color: '#9A9AB0' }} />
              </Link>
              <h1 className="setpassword-title">Set New Password</h1>
            </div>

            <div className="setpassword-content">
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
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="input your password in here"
                    className={validationErrors.password ? 'error' : ''}
                  />
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
                <div className="form-group-new" style={{ marginBottom: '30px' }}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="input your password in here"
                    className={validationErrors.confirmPassword ? 'error' : ''}
                  />
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

                <div style={{ marginTop: '10px' }}>
                  <button
                    type="submit"
                    className="btn-signin"
                    disabled={isLoading}
                    style={{ display: 'block', width: '100%' }}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />

      {/* Success Modal/Popup */}
      {showSuccessModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#0A0A0A40',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '40px',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0px 29px 28.1px 0px #0000000D'
          }}>
            {/* Icon Placeholder - User will import icon here */}
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 20px',
              display: 'block'
            }}>
              {/* Icon will be imported here */}
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#141414',
              marginBottom: '16px',
              fontFamily: 'sans-serif'
            }}>
              Password Changed Successfully!
            </h2>

            {/* Descriptive Text */}
            <p style={{
              fontSize: '14px',
              color: '#6B7280',
              marginBottom: '30px',
              lineHeight: '1.5',
              fontFamily: 'sans-serif'
            }}>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.
            </p>

            {/* Sign In Button */}
            <button
              onClick={handleSignIn}
              style={{
                width: '100%',
                backgroundColor: '#00325C',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SetPasswordPage
