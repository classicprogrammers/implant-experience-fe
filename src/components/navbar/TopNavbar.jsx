import React, { useState } from 'react';
import warningIcon from '../../assets/images/warningIcon.png';
import './TopNavbar.css';
import avatarImage from '../../assets/images/avatar.jpg';

const TopNavbar = ({ onMenuToggle }) => {
    const [showModal, setShowModal] = useState(false);

    const handleBellClick = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div className="top-navbar">
            {/* Mobile Menu Button */}
            <div className="mobile-menu-button" onClick={onMenuToggle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <div className="search-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                />
            </div>

            {/* Right Side - User Info */}
            <div className="user-section">
                {/* Notification Bell */}
                <div className="notification-bell" onClick={handleBellClick} style={{ cursor: 'pointer' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* User Avatar */}
                <div className="user-avatar">
                    <img src={avatarImage} alt="User Avatar" className="avatar-image" />
                </div>

                {/* User Info */}
                <div className="user-info">
                    <div className="user-name">Franklin Astiy</div>
                    <div className="user-role">Receptionist</div>
                </div>

                {/* Dropdown Arrow */}
                <div className="dropdown-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {/* Notification Modal */}
            {showModal && (
                <div className="notification-modal-overlay" onClick={handleClose}>
                    <div className="notification-modal" onClick={e => e.stopPropagation()}>
                        <button onClick={handleClose} className='modal-close-btn'><span>&times;</span></button>
                        <div className="modal-header">
                            <img src={warningIcon} alt="" className="modal-warning-icon" />
                            <h2 className='text-[#00325C] font-bold text-[25px]'>Your device has been recalled</h2>
                        </div>
                        <p className="modal-description ">
                            A recall has been issued for this device due to a potential safety concern. Please follow the steps below to address this issue.
                        </p>
                        <hr style={{ border: '1px solid #EDEDED', width: '100%' }} />

                        <div className="modal-steps">
                            <div className="modal-step">
                                <strong className='text-[#00325C]'>1. Contact your healthcare provider</strong>
                                <p>Reach out to your doctor or specialist to discuss the recall and determine the appropriate action.</p>
                            </div>
                            <div className="modal-step">
                                <strong className='text-[#00ACB2]'>2. Schedule a follow-up appointment</strong>
                                <p>Arrange a visit with your healthcare provider to have your device inspected or replaced if necessary.</p>
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button className="modal-btn acknowledge" onClick={handleClose}>Acknowledge</button>
                            <button className="modal-btn contact">Contact Providers</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopNavbar;
