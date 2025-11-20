import React, { useCallback, useEffect, useState } from 'react';
import warningIcon from '../../assets/images/warningIcon.png';
import './TopNavbar.css';
import avatarImage from '../../assets/images/avatar.jpg';
import { api } from '../../utils/api';

const UNACK_ENDPOINT = '/recalls/unacknowledged';
const ACK_ENDPOINT_PREFIX = '/recalls/impact';

const normalizeUnacknowledged = (payload = {}) => {
    const possibleLists = [
        payload?.data?.impacts,
        payload?.data?.items,
        payload?.data?.recalls,
        payload?.data,
        payload?.impacts,
        payload?.items,
        payload?.recalls,
        payload,
    ];

    const list = possibleLists.find((entry) => Array.isArray(entry)) || [];
    const candidate = list[0] || (typeof payload === 'object' && !Array.isArray(payload) ? payload : null);

    if (!candidate || typeof candidate !== 'object') {
        return null;
    }

    return {
        impactId: candidate.impactId || candidate.impact_id || candidate.id || candidate._id || null,
        deviceName: candidate.deviceName || candidate.device || candidate.title || 'Your device',
        description:
            candidate.description ||
            candidate.summary ||
            candidate.reason ||
            'A recall has been issued for this device due to a potential safety concern.',
        acknowledged: Boolean(candidate.acknowledged || candidate.isAcknowledged || candidate.status === 'acknowledged'),
    };
};

const TopNavbar = ({ onMenuToggle }) => {
    const [showModal, setShowModal] = useState(false);
    const [storedUser, setStoredUser] = useState(() => {
        try {
            const raw = localStorage.getItem('user');
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    });
    const [recallRecord, setRecallRecord] = useState(null);
    const [recallLoading, setRecallLoading] = useState(false);
    const [ackLoading, setAckLoading] = useState(false);
    const [ackError, setAckError] = useState(null);

    useEffect(() => {
        const refreshUser = () => {
            try {
                const raw = localStorage.getItem('user');
                setStoredUser(raw ? JSON.parse(raw) : null);
            } catch {
                setStoredUser(null);
            }
        };
        window.addEventListener('storage', refreshUser);
        window.addEventListener('user-updated', refreshUser);
        return () => {
            window.removeEventListener('storage', refreshUser);
            window.removeEventListener('user-updated', refreshUser);
        };
    }, []);

    const fetchUnacknowledged = useCallback(
        async ({ autoOpen = false } = {}) => {
            try {
                setRecallLoading(true);
                setAckError(null);
                const response = await api.get(UNACK_ENDPOINT);
                const normalized = normalizeUnacknowledged(response?.data) || null;
                setRecallRecord(normalized);

                if (autoOpen) {
                    if (normalized && !normalized.acknowledged) {
                        setShowModal(true);
                    }
                    localStorage.removeItem('showNotificationModalOnLogin');
                }

                return normalized;
            } catch (err) {
                console.error('Failed to fetch unacknowledged recalls:', err);
                setRecallRecord(null);
                if (autoOpen) {
                    localStorage.removeItem('showNotificationModalOnLogin');
                }
                return null;
            } finally {
                setRecallLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        const shouldOpenOnLogin = localStorage.getItem('showNotificationModalOnLogin') === 'true';
        if (shouldOpenOnLogin) {
            setShowModal(true);
        }
        fetchUnacknowledged({ autoOpen: shouldOpenOnLogin });
    }, [fetchUnacknowledged]);

    const displayName = ([storedUser?.fullName, storedUser?.lastName].filter(Boolean).join(' ') || storedUser?.name || storedUser?.username || 'User');
    const displayRole = storedUser?.role || 'User';

    const handleBellClick = () => {
        fetchUnacknowledged();
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);

    const handleAcknowledge = async () => {
        if (!recallRecord?.impactId || ackLoading) return;
        try {
            setAckLoading(true);
            setAckError(null);
            const endpoint = `${ACK_ENDPOINT_PREFIX}/${recallRecord.impactId}/acknowledge`;
            await api.post(endpoint);
            setRecallRecord((prev) => (prev ? { ...prev, acknowledged: true } : prev));
            setShowModal(false);
        } catch (err) {
            console.error('Failed to acknowledge recall impact:', err);
            setAckError(err?.response?.data?.message || err.message || 'Failed to acknowledge.');
        } finally {
            setAckLoading(false);
        }
    };

    const showAcknowledgeButton = recallRecord && !recallRecord.acknowledged;
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
                    <img src={storedUser?.profile || avatarImage} alt="User Avatar" className="avatar-image" />
                </div>

                {/* User Info */}
                <div className="user-info">
                    <div className="user-name">{displayName}</div>
                    <div className="user-role">{displayRole}</div>
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
                            {ackError && (
                                <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '8px' }}>{ackError}</p>
                            )}
                            {recallLoading && (
                                <p style={{ color: '#4b5563', fontSize: '13px', marginBottom: '8px' }}>
                                    Checking your recall status…
                                </p>
                            )}
                            {showAcknowledgeButton ? (
                                <button
                                    className="modal-btn acknowledge"
                                    onClick={handleAcknowledge}
                                    disabled={ackLoading}
                                >
                                    {ackLoading ? 'Acknowledging…' : 'Acknowledge'}
                                </button>
                            ) : (
                                <button className="modal-btn acknowledge" disabled>
                                    {recallRecord ? 'Acknowledged' : 'No alerts'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopNavbar;
