import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthFooter from '../../components/auth/AuthFooter';
import SuccessPopup from '../../assets/images/SuccessPopup.png';
import './SetPassword.css';

function PasswordSuccessPage() {
  const navigate = useNavigate();

  // Disable body scroll when component mounts
  useEffect(() => {
    document.body.classList.add('success-page-active');
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    return () => {
      document.body.classList.remove('success-page-active');
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
  }, []);

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <div className="password-success-wrapper">
      <AuthHeader />
      <div className="success-page-overlay">
        <div className="success-page-container">
          <div className="success-modal-content">
            <div className="success-modal-icon">
              <img
                src={SuccessPopup}
                alt="Success Icon"
              />
            </div>
            <h2>
              Password Changed
              <br />
              Successfully!
            </h2>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.
            </p>
            <button
              onClick={handleSignIn}
              className="success-modal-button"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}

export default PasswordSuccessPage;

