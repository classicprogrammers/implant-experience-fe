import React from 'react'
import './NotificationPage.css'
import notificationGreenImage from '../../assets/images/notification-green.png'

function NotificationPage() {
    return (
                <div className="notification-page">
                    <div className="notification-container">
                        {/* Header Section */}
                        <div className="notification-header">
                            <div className="notification-title-section">
                                <div className="notification-icon">
                                    <img src={notificationGreenImage} alt="Notification" className="notification-icon-img" />
                                </div>
                                <div className="notification-text">
                                    <h1 className="notification-title">Notifications</h1>
                                    <p className="notification-subtitle">You've got 6 recommendations to solve</p>
                                </div>
                            </div>
                            <button className="mark-completed-btn">
                                Mark all as completed
                            </button>
                        </div>

                        {/* Today Section */}
                        <div className="notification-section">
                            <h2 className="section-heading">Today</h2>
                            <div className="notification-list">
                                <div className="notification-card">
                                    <div className="card-icon check-icon">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Example title notification!</h3>
                                        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>

                                <div className="notification-card">
                                    <div className="card-icon wrench-icon">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Example title notification!</h3>
                                        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>

                                <div className="notification-card">
                                    <div className="card-icon exclamation-icon">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Example title notification!</h3>
                                        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yesterday Section */}
                        <div className="notification-section">
                            <h2 className="section-heading">Yesterday</h2>
                            <div className="notification-list">
                                <div className="notification-card">
                                    <div className="card-icon check-icon">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Example title notification!</h3>
                                        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>

                                <div className="notification-card">
                                    <div className="card-icon wrench-icon">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Example title notification!</h3>
                                        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>

                                <div className="notification-card">
                                    <div className="card-icon exclamation-icon">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Example title notification!</h3>
                                        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default NotificationPage
