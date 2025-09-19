import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import '../../App.css'

function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: ''
  })
  const [isLoading, setIsLoading] = useState(false)
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

    setTimeout(() => {
      console.log('Password reset attempt:', formData)
      setIsLoading(false)
      navigate('/login')
    }, 1000)
  }

  return (
    <>
      <div className="auth-page-new">
        <div className="auth-container-new">
          <div className="auth-card py-[35px]">
            <div className="forgot-password-header flex items-center gap-[10px] justify-center relative mb-2">
              <Link to="/login" className="back-arrow absolute left-[15px]" style={{border : '1px solid #E1E1E1', borderRadius : '8px', padding : '8px 10px 0px 10px'}}>
                <IoIosArrowBack style={{ fontSize: '24px', color: '#9A9AB0' }} />
              </Link>
              <h1 className="forgot-password-title">Forgot Password</h1>
            </div>

            <div className="forgot-password-content">
              <div className='px-[40px] text-center'>
                <p className="instruction-text mb-2">
                  Enter the email address you used when you joined and we'll send you instructions to reset your password.
                </p>
                <p className="security-note">
                  For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.
                </p>
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
                    placeholder="input your email in here"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-signin"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Reset'}
                </button>
              </form>
            </div>
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

export default ForgotPasswordPage