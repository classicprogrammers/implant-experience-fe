import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api'; // adjust this import path as needed
import './NotificationPage.css';
import notificationGreenImage from '../../assets/images/notification-green.png';

function NotificationPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await api.get('/notifications');
            const data = response.data?.data?.notifications || [];
            setNotifications(data);
        } catch (err) {
            console.error('Error fetching notifications:', err);
            setError('Failed to load notifications');
        } finally {
            setLoading(false);
        }
    };

    // 🧠 Group notifications by date (Today / Yesterday / Older)
    const groupNotificationsByDate = (list) => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const isSameDay = (d1, d2) =>
            d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();

        const todayNotifications = [];
        const yesterdayNotifications = [];
        const olderNotifications = [];

        list.forEach((n) => {
            const createdAt = new Date(n.createdAt);
            if (isSameDay(createdAt, today)) todayNotifications.push(n);
            else if (isSameDay(createdAt, yesterday)) yesterdayNotifications.push(n);
            else olderNotifications.push(n);
        });

        return { todayNotifications, yesterdayNotifications, olderNotifications };
    };

    const { todayNotifications, yesterdayNotifications, olderNotifications } = groupNotificationsByDate(notifications);


    const handleMarkcomplete = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await api.patch('/notifications/read-all');
            console.log('Mark all as complete response:', response);
            fetchNotifications(); // Refresh notifications after marking as complete
        } catch (error) {
            console.error('Error marking notifications as complete:', error);
            setError('Failed to mark notifications as complete');
        } finally {
            setLoading(false);
        }
    };

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
                            <p className="notification-subtitle">
                                {notifications.length > 0
                                    ? `You've got ${notifications.length} notifications`
                                    : 'No new notifications'}
                            </p>
                        </div>
                    </div>
                    <button className="mark-completed-btn" onClick={handleMarkcomplete}>Mark all as completed</button>
                </div>

                {/* Loading / Error States */}
                {loading && <p className="loading-text">Loading notifications...</p>}
                {error && <p className="error-text">{error}</p>}

                {!loading && !error && (
                    <>
                        {/* TODAY */}
                        {todayNotifications.length > 0 && (
                            <div className="notification-section">
                                <h2 className="section-heading">Today</h2>
                                <div className="notification-list">
                                    {todayNotifications.map((n) => (
                                        <NotificationCard key={n.id} data={n} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* YESTERDAY */}
                        {yesterdayNotifications.length > 0 && (
                            <div className="notification-section">
                                <h2 className="section-heading">Yesterday</h2>
                                <div className="notification-list">
                                    {yesterdayNotifications.map((n) => (
                                        <NotificationCard key={n.id} data={n} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* OLDER / PREVIOUS NOTIFICATIONS */}
                        {olderNotifications.length > 0 && (
                            <div className="notification-section">
                                <h2 className="section-heading">Previous Notifications</h2>
                                <div className="notification-list">
                                    {olderNotifications.map((n) => (
                                        <NotificationCard key={n.id} data={n} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* NO NOTIFICATIONS */}
                        {todayNotifications.length === 0 &&
                            yesterdayNotifications.length === 0 &&
                            olderNotifications.length === 0 && (
                                <p className="no-notifications-text">You have no recent notifications.</p>
                            )}
                    </>
                )}
            </div>
        </div>
    );
}

// 🔹 Reusable Notification Card Component
const NotificationCard = ({ data }) => {
    const { title, message, type, priority } = data;

    const getIconClass = () => {
        switch (type) {
            case 'system_alert':
                return 'exclamation-icon';
            case 'update':
                return 'wrench-icon';
            case 'success':
                return 'check-icon';
            default:
                return 'check-icon';
        }
    };

    return (
        <div className="notification-card">
            <div className={`card-icon ${getIconClass()}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="card-content notifications">
                <div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
