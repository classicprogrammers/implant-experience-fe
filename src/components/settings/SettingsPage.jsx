import React, { useState } from 'react'
import './SettingsPage.css'

function SettingsPage() {
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)

    const toggleNewPassword = () => {
        setShowNewPassword(!showNewPassword)
    }

    const toggleRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword)
    }

    return (
                <div className="settings-page">
                    <div className="settings-container">
                        {/* Account Section */}
                        <div className="settings-section">
                            <h2 className="section-title">Account</h2>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-input" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-input" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-input" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input type="tel" className="form-input" placeholder="Phone" />
                                </div>
                            </div>
                            <button className="save-btn">Save Changes</button>
                        </div>

                        {/* Password Section */}
                        <div className="settings-section">
                            <h2 className="section-title">Your Password</h2>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">New Password</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            className="password-input"
                                            placeholder="Password"
                                        />
                                        <button
                                            type="button"
                                            className="password-toggle"
                                            onClick={toggleNewPassword}
                                        >
                                            {showNewPassword ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <circle cx="12" cy="12" r="3" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <line x1="1" y1="1" x2="23" y2="23" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Repeat Password</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showRepeatPassword ? "text" : "password"}
                                            className="password-input"
                                            placeholder="Password"
                                        />
                                        <button
                                            type="button"
                                            className="password-toggle"
                                            onClick={toggleRepeatPassword}
                                        >
                                            {showRepeatPassword ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <circle cx="12" cy="12" r="3" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <line x1="1" y1="1" x2="23" y2="23" stroke="#00325C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="save-btn">Update Password</button>
                        </div>
                    </div>
                </div>
    )
}

export default SettingsPage