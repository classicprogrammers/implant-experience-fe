import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthFooter from '../../components/auth/AuthFooter';
import SuccessPopup from '../../assets/images/paySuccessIcon.png';
import '../myplan/PaymentSuccess.css';

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

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

    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    const handleManageBilling = () => {
        navigate('/my-plan');
    };

    return (
        <div className="password-success-wrapper">
            <AuthHeader />
            <div className="payment-success-overlay">
                <div className="payment-success-card-wrapper">
                    <div className="payment-success-card">
                        <div className="payment-success-icon">
                            <img src={SuccessPopup} alt="Payment Successful" />
                        </div>

                        <h2 className="payment-success-title">Payment Successful</h2>
                        <p className="payment-success-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla molestie aliquet.
                            Sed mollis nibh id turpis volutpat laoreet. Aliquam sed tortor felis.
                        </p>

                        <div className="payment-success-details">
                            <div className="payment-details-header">Transaction Details</div>
                            <div className="payment-details-body">
                                <div className="payment-details-row">
                                    <span className="details-label">Date</span>
                                    <span className="details-value">04/05/24</span>
                                </div>
                                <div className="payment-details-row">
                                    <span className="details-label">Amount</span>
                                    <span className="details-value">$ 40.00</span>
                                </div>
                                <div className="payment-details-row">
                                    <span className="details-label">Transaction ID</span>
                                    <span className="details-value">349339393</span>
                                </div>
                                <div className="payment-details-row total">
                                    <span className="details-label">Total Amount</span>
                                    <span className="details-value">$ 50.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="payment-success-actions">
                            <button
                                type="button"
                                className="payment-btn primary"
                                onClick={handleGoToDashboard}
                            >
                                Go to Dashboard
                            </button>
                            <button
                                type="button"
                                className="payment-btn secondary"
                                onClick={handleManageBilling}
                            >
                                Manage Billing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AuthFooter />
        </div>
    );
};

export default PaymentSuccessPage;


