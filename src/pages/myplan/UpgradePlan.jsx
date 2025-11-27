import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UpgradePlan.css';
import arrowLeft from '../../assets/images/ArrowLeft.png';

const UpgradePlan = () => {
    const navigate = useNavigate();

    const features = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Sed do eiusmod tempor incididunt ut labore',
        'Ut enim ad minim veniam, quis nostrud exercitation',
        'Duis aute irure dolor in reprehenderit',
        'Excepteur sint occaecat cupidatat non proident'
    ];

    const handleViewCurrentPlan = () => {
        navigate('/my-plan');
    };

    const handleUpgradeNow = () => {
        // Navigate to payment or upgrade flow
        console.log('Upgrade Now clicked');
    };

    return (
        <>
            {/* Breadcrumb - Outside container */}
            <div className="breadcrumb-wrapper">
                <div className="breadcrumb">
                    <Link to="/dashboard">Dashboard</Link>
                    <span className="breadcrumb-separator">{'>'}</span>
                    <Link to="/my-plan">My Plan</Link>
                    <span className="breadcrumb-separator">{'>'}</span>
                    <span className="breadcrumb-current">Upgrade Plan</span>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="upgrade-plan-page">
                {/* Header Section */}
                <div className="upgrade-plan-header">
                    <div className="header-left">
                        <button className="back-arrow-btn" onClick={() => navigate('/my-plan')}>
                            <img src={arrowLeft} alt="Back" />
                        </button>
                        <div className="header-text">
                            <h1>Upgrade Plan</h1>
                            <p>Get faster alerts and priority support</p>
                        </div>
                    </div>
                    <div className="header-right">
                        <button className="view-current-plan-btn" onClick={handleViewCurrentPlan}>
                            View Current Plan
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Premium Plan Card */}
                <div className="premium-plan-card">
                    <div className="plan-badge">Most Popular</div>
                    <h2 className="plan-title">Premium</h2>
                    <div className="plan-pricing">
                        <span className="price-amount">$200</span>
                        <span className="price-period">/Monthly</span>
                    </div>
                    <p className="plan-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="plan-features">
                        {features.map((feature, index) => (
                            <li key={index} className="feature-item">
                                <span className="checkmark-icon">✓</span>
                                <span className="feature-text">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="upgrade-now-btn" onClick={handleUpgradeNow}>
                        Upgrade Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default UpgradePlan;

