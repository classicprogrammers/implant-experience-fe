import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import { api } from '../../utils/api';
import './Sidebar.css';
import logoImage from '../../assets/images/implant-logo.png';
import categoryImage from '../../assets/images/category.png';
import categoryImage2 from '../../assets/images/category-2.png';
import notificationImage from '../../assets/images/notification.png';
import notificationImage2 from '../../assets/images/notification-2.png';
import deviceImage from '../../assets/images/Device.png';
import deviceImage2 from '../../assets/images/Device-2.png';
import resourcesImage from '../../assets/images/resources.png';
import resourcesImage2 from '../../assets/images/resourcesActive.png';
import groupImage from '../../assets/images/Group.png';
import settingImage from '../../assets/images/gear 1.png';
import setting2Image from '../../assets/images/setting-2.png';

const Sidebar = ({ isOpen, onClose }) => {
    const [notifications] = useState(0);
    const [resources] = useState(0);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();
    const { success } = useToast();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);

            // Call logout API
            await api.post('/auth/logout');

            // Clear localStorage
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');

            // Show success toast
            success('Logged out successfully!', 2000);

            // Navigate to login page after a short delay to show toast
            setTimeout(() => {
                navigate('/login');
            }, 1000);

        } catch (error) {
            console.error('Logout error:', error);

            // Even if API call fails, clear localStorage and redirect
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');

            // Show success toast even if API fails (user is still logged out)
            success('Logged out successfully!', 2000);

            // Navigate to login page after a short delay to show toast
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Close Button for Mobile */}
                <div className="sidebar-close-button" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Logo Section */}
                <div className="sidebar-logo">
                    <img src={logoImage} alt="Implant Experience Logo" className="logo-image" />
                </div>

                {/* Navigation Items */}
                <nav className="sidebar-nav">
                    <div className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`} onClick={() => navigate('/dashboard')}>
                        <div className="nav-icon">
                            <img src={location.pathname === '/dashboard' ? categoryImage : categoryImage2} alt="Dashboard" width="16" height="16" />
                        </div>
                        <span className="nav-text">Dashboard</span>
                    </div>

                    <div className={`nav-item ${location.pathname === '/notifications' ? 'active' : ''}`} onClick={() => navigate('/notifications')}>
                        <div className="nav-icon">
                            <img src={location.pathname == '/notifications' ? notificationImage2 : notificationImage} alt="Notification" width="16" height="16" />
                        </div>
                        <span className="nav-text">Notification</span>
                        {notifications > 0 && (
                            <div className="notification-badge">
                                {notifications}
                            </div>
                        )}
                    </div>

                    <div className={`nav-item ${location.pathname === '/my-devices' ? 'active' : ''}`} onClick={() => navigate('/my-devices')}>
                        <div className="nav-icon">
                            <img src={location.pathname === '/my-devices' ? deviceImage2 : deviceImage} alt="My Devices" width="16" height="16" />
                        </div>
                        <span className="nav-text">My Devices</span>
                    </div>

                    <div className={`nav-item ${location.pathname === '/resources' ? 'active' : ''}`} onClick={() => navigate('/resources')}>
                        <div className="nav-icon">
                        <img src={location.pathname === '/resources' ? resourcesImage2 : resourcesImage} alt="Setting" width="16" height="16" />
                        </div>
                        <span className="nav-text">Resources</span>
                        {resources > 0 && (
                            <div className="notification-badge">
                                {resources}
                            </div>
                        )}
                    </div>

                    <div className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`} onClick={() => navigate('/settings')}>
                        <div className="nav-icon">
                            <img src={location.pathname === '/settings' ? setting2Image : settingImage} alt="Setting" width="16" height="16" />
                        </div>
                        <span className="nav-text">Setting</span>
                    </div>

                    <div
                        className={`nav-item`}
                        onClick={handleLogout}
                        style={{
                            cursor: 'pointer',
                            opacity: isLoggingOut ? 0.7 : 1,
                            pointerEvents: isLoggingOut ? 'none' : 'auto'
                        }}
                    >
                        <div className="nav-icon">
                            <img src={groupImage} alt="Log Out" width="16" height="16" />
                        </div>
                        <span className="nav-text">
                            {isLoggingOut ? 'Logging Out...' : 'Log Out'}
                        </span>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
