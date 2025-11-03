import React, { useEffect, useState } from 'react'
import './SettingsPage.css'
import { api } from '../../utils/api'
import avatarDefault from '../../assets/images/avatar.jpg'
import outlineIcon from '../../assets/images/Outline.png'

function SettingsPage() {
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const toggleNewPassword = () => {
        setShowNewPassword(!showNewPassword)
    }

    const toggleRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword)
    }

    const fetchUser = async () => {
        setLoading(true)
        try {
            const response = await api.get('/auth/profile')
            setUser(response.data.data.user)
        } catch (error) {
            console.error('Error fetching user:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        // update user info if it's a user field
        if (name !== 'currentPassword' && name !== 'newPassword' && name !== 'confirmPassword') {
            setUser((prev) => ({
                ...prev,
                [name]: value
            }));
        }

        // handle password fields separately
        if (name === 'currentPassword') setCurrentPassword(value);
        if (name === 'newPassword') setNewPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
    };

    const updateUser = async () => {
        setLoading(true);
        setError('');
        setSuccess('');

        if (!user?.fullName || !user?.email || !user?.username) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            const response = await api.put('/auth/profile', user);

            console.log(response.data);
            fetchUser()
            setError('');
            setSuccess(response.data.message || 'Profile updated successfully');

        } catch (error) {
            console.error('Error updating user:', error);

            if (error?.response?.data?.success) {
                // Backend responded successfully but Axios threw (wrong status code)
                setSuccess(error.response.data.message || 'Profile updated successfully');
                setError('');
                return;
            }

            if (error?.response?.data?.errors?.length) {
                const messages = error.response.data.errors.map(err => err.msg).join('\n');
                setError(messages);
            } else {
                setError(error?.response?.data?.message || 'Failed to update profile');
            }

            setSuccess('');
        }
        finally {
            setLoading(false);
        }
    };


    const ChangePassword = async () => {
        setLoading(true);
        setError('');
        setSuccess('');

        if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (currentPassword === newPassword) {
            setError('New password cannot be the same as the current password');
            setLoading(false);
            return;
        }

        try {
            const response = await api.post('/auth/change-password', {
                currentPassword,
                newPassword,
                confirmPassword
            });

            setSuccess(response.data.message);
            setError('');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setShowNewPassword(false);
            setShowRepeatPassword(false);
        } catch (error) {
            console.error('Error changing password:', error);

            // 🔹 handle backend validation errors
            if (error?.response?.data?.errors?.length) {
                const messages = error.response.data.errors.map(err => err.msg).join('\n');
                setError(messages);
            } else {
                // fallback for general errors
                setError(error?.response?.data?.message || 'Something went wrong');
            }

            setSuccess('');
            setShowNewPassword(false);
            setShowRepeatPassword(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="settings-page">

            <div className="settings-container">
                {/*  Profile section */}
                <div className="profile-section">
                    <h2 className="section-title">Profile Picture</h2>
                    <div className="profile-row">
                        <div className="profile-avatar">
                            <img src={user?.avatar || avatarDefault} alt={user?.fullName || 'Profile'} />
                        </div>
                        <div className="profile-meta">
                            <h3 className="profile-name">{user?.fullName || 'User Name'}</h3>
                            <p className="profile-role">{user?.role || 'Consumer'}</p>
                        </div>
                        <button type="button" className="edit-picture-btn"><img src={outlineIcon} alt="" /><span>Edit Picture</span></button>
                    </div>
                    <button className="save-primary-btn" onClick={updateUser} disabled={loading}>{loading ? 'Saving...' : 'Save Change'}</button>
                </div>
                {/* Account Section */}
                <div className="settings-section">
                    {success && <div className="success-message">{success}</div>}
                    {error && <div className="error-message">{error}</div>}
                    <h2 className="section-title">Account</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-input" placeholder="First Name" name="fullName" value={user?.fullName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-input" placeholder="Last Name" name="lastName" value={user?.lastName || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" placeholder="Email" name="email" value={user?.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-input" placeholder="Username" name="username" value={user?.username || ''} onChange={handleChange} />
                        </div>
                    </div>
                    <button className="save-btn" onClick={updateUser} disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</button>
                </div>

                {/* Password Section */}
                <div className="settings-section">
                    <h2 className="section-title">Your Password</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Current Password</label>
                            <div className="password-input-container">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    className="password-input"
                                    placeholder="Current Password"
                                    name="currentPassword"
                                    value={currentPassword}
                                    onChange={handleChange}
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
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">New Password</label>
                            <div className="password-input-container">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    className="password-input"
                                    placeholder="Password"
                                    name="newPassword"
                                    value={newPassword}
                                    onChange={handleChange}
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
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleChange}
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
                    <button className="save-btn" onClick={ChangePassword} disabled={loading}>{loading ? 'Updating...' : 'Update Password'}</button>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage