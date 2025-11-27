import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyPlan.css';
import arrowLeft from '../../assets/images/ArrowLeft.png';

const MyPlan = () => {
    const [selectedPeriod] = useState('Last 6 months');

    // Temporary dummy payment history data
    const paymentHistory = [
        {
            id: 1,
            date: 'Oct 20, 2025',
            method: 'via Stripe',
            status: 'Successful',
            amount: '$ 90.00',
        },
        {
            id: 2,
            date: 'Oct 20, 2025',
            method: 'via Stripe',
            status: 'Successful',
            amount: '$ 90.00',
        },
        {
            id: 3,
            date: 'Oct 20, 2025',
            method: 'via Stripe',
            status: 'Successful',
            amount: '$ 90.00',
        },
    ];

    return (
        <>
            {/* Breadcrumb - Outside container */}
            <div className="breadcrumb-wrapper">
                <div className="breadcrumb">
                    <Link to="/dashboard">Dashboard</Link>
                    <span className="breadcrumb-separator">{'>'}</span>
                    <span className="breadcrumb-current">My Plan</span>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="my-plan-page">
                {/* Header Section */}
                <div className="my-plan-header">
                    <div className="header-left">
                        <button className="back-arrow-btn" onClick={() => window.history.back()}>
                            <img src={arrowLeft} alt="Back" />
                        </button>
                        <div className="header-text">
                            <h1>My Plan</h1>
                            <p>You've got 6 recommendations to solve</p>
                        </div>
                    </div>
                    <div className="header-right">
                        <button className="dropdown-button">
                            <span>{selectedPeriod}</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Selected Plan Card */}
                <div className="selected-plan-card">
                    <div className="plan-status-pill">
                        <span className="status-dot"></span>
                        <span className="status-text">Active</span>
                    </div>

                    <div className="plan-card-content">
                        <div className="plan-card-left">
                            <p className="plan-section-label">Selected Plan</p>
                            <h2 className="plan-name">Free</h2>
                        </div>

                        <div className="plan-info-row">
                            <div className="plan-labels">
                                <p>Renews:</p>
                                <p>Amount</p>
                            </div>
                            <div className="plan-values">
                                <div>
                                    <p className="plan-date">01/12/2026</p>
                                    <p className="plan-price">
                                        $ 0.00
                                        <span className="plan-price-period">/monthly</span>
                                    </p>
                                </div>
                                <button className="upgrade-button">Upgrade Plan</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment History Section */}
                <div className="payment-history-section">
                    <h3 className="payment-history-title">Payment History</h3>

                    {paymentHistory.length === 0 ? (
                        <p className="no-data-text">No data to show.</p>
                    ) : (
                        <div className="payment-history-list">
                            {paymentHistory.map((payment) => (
                                <div key={payment.id} className="payment-history-item">
                                    <div className="payment-item-left">
                                        <p className="payment-date">{payment.date}</p>
                                        <p className="payment-method">{payment.method}</p>
                                    </div>
                                    <div className="payment-item-right">
                                        <p className="payment-status">{payment.status}</p>
                                        <p className="payment-amount">
                                            {payment.amount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyPlan;

