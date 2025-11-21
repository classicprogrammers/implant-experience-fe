import React, { useState, useEffect, useCallback } from 'react'
import { api } from '../../../utils/api'

const USER_RECALLS_ENDPOINT = '/recalls/user/50d4340f-c41f-42ca-a988-18a66db6ac67'

const ActivityLog = () => {
    // const [activityLogs, setActivityLogs] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    // const [pendingCount, setPendingCount] = useState(0);
    const [recallAlerts, setRecallAlerts] = useState([])
    const [recallLoading, setRecallLoading] = useState(true)
    const [recallError, setRecallError] = useState(null)

    // Fetch activity logs from API
    // const fetchActivityLogs = useCallback(async () => {
    //     try {
    //         setLoading(true)
    //         setError(null)
    //         const response = await api.get('/logs/activity')

    //         // Debug: Log the response structure to understand what we're getting
    //         console.log('Activity Logs API Response:', response.data)

    //         if (response.data.success && Array.isArray(response.data.data.logs)) {
    //             setActivityLogs(response.data.data.logs)
    //             // Count pending items (you can customize this logic based on your needs)
    //             const pendingItems = response.data.data.logs.filter(log =>
    //                 log.severity === 'warning' || log.severity === 'error'
    //             ).length
    //             setPendingCount(pendingItems)
    //         } else {
    //             setError('Failed to fetch activity logs')
    //             setActivityLogs([])
    //         }
    //     } catch (err) {
    //         console.error('Error fetching activity logs:', err)
    //         setError('Failed to load activity logs. Please try again.')
    //         setActivityLogs([])
    //     } finally {
    //         setLoading(false)
    //     }
    // }, [])

    const normalizeRecallAlerts = (items = []) => {
        if (!Array.isArray(items)) return []

        return items.map((item, index) => {
            const deviceLabel = item.deviceName || item.device_name || item.title || item.recallTitle || 'Device Recall'
            const description =
                item.description ||
                item.issue ||
                item.reason ||
                item.summary ||
                item.message ||
                'Please review this recall notice for more details.'

            const timestamp =
                item.notifiedAt ||
                item.alertedAt ||
                item.createdAt ||
                item.updatedAt ||
                item.date ||
                item.timestamp ||
                null

            return {
                id: item.id || item._id || item.recallId || `recall-${index}`,
                title: deviceLabel,
                description,
                timestamp,
                severity: item.severity || item.status || 'info',
            }
        })
    }

    const fetchRecallAlerts = useCallback(async () => {
        try {
            setRecallLoading(true)
            setRecallError(null)
            const response = await api.get(USER_RECALLS_ENDPOINT)

            console.log('Device Recall API Response:', response.data)

            const possibleLists = [
                response?.data?.data?.recalls,
                response?.data?.data?.items,
                response?.data?.data,
                response?.data?.recalls,
                response?.data,
            ]

            const recallsArray = possibleLists.find((entry) => Array.isArray(entry)) || []
            setRecallAlerts(normalizeRecallAlerts(recallsArray))
        } catch (err) {
            console.error('Error fetching recall alerts:', err)
            setRecallAlerts([])
            setRecallError('Failed to load recall alerts. Please try again.')
        } finally {
            setRecallLoading(false)
        }
    }, [])

    useEffect(() => {
        // fetchActivityLogs()
        fetchRecallAlerts()
    }, [fetchRecallAlerts])

    // Format date for display
    const formatDateTime = (dateString) => {
        if (!dateString) return 'Unknown time'
        try {
            const date = new Date(dateString)
            if (isNaN(date.getTime())) return 'Invalid date'
            return date.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            })
        } catch {
            return 'Invalid date'
        }
    }

    // Get activity card class based on severity
    // const getActivityCardClass = (severity) => {
    //     switch (severity) {
    //         case 'error':
    //             return 'activity-card activity-card-red'
    //         case 'warning':
    //             return 'activity-card activity-card-yellow'
    //         case 'info':
    //         default:
    //             return 'activity-card activity-card-white'
    //     }
    // }

    // Get notification icon based on action type
    // const getNotificationIcon = (action) => {
    //     switch (action) {
    //         case 'device_created':
    //             return (
    //                 <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
    //                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //                 </svg>
    //             )
    //         case 'device_updated':
    //             return (
    //                 <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
    //                     <path fillRule="evenodd" d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" clipRule="evenodd" />
    //                 </svg>
    //             )
    //         case 'device_deleted':
    //             return (
    //                 <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    //                     <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
    //                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    //                 </svg>
    //             )
    //         default:
    //             return (
    //                 <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
    //                     <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    //                 </svg>
    //             )
    //     }
    // }

    // if (loading) {
    //     return (
    //         <div className="activity-log-container">
    //             <div className="flex justify-between items-center mb-4">
    //                 <h3 className="activity-log-title">Activity Log</h3>
    //             </div>
    //             <div className="loading-container">
    //                 <div className="loading-spinner"></div>
    //                 <p>Loading activity logs...</p>
    //             </div>
    //         </div>
    //     )
    // }

    // if (error) {
    //     return (
    //         <div className="activity-log-container">
    //             <div className="flex justify-between items-center mb-4">
    //                 <h3 className="activity-log-title">Activity Log</h3>
    //             </div>
    //             <div className="error-container">
    //                 <p className="error-message">{error}</p>
    //                 <button onClick={fetchActivityLogs} className="retry-button">
    //                     Try Again
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="activity-log-container">
            {/* <div className="flex justify-between items-center mb-4">
                <h3 className="activity-log-title">Activity Log</h3>
                <div className="flex items-center gap-2">
                    <div className="pending-badge">
                        <span className="pending-text">Pending</span>
                        <div className="pending-count">{pendingCount}</div>
                    </div>
                </div>
            </div>
            <div className="activity-list">
                {!Array.isArray(activityLogs) || activityLogs.length === 0 ? (
                    <div className="no-activity">
                        <p>No activity logs found</p>
                    </div>
                ) : (
                    activityLogs.slice(0, 3).map((log) => (
                        <div key={log.id} className={getActivityCardClass(log.severity)}>
                            <div>
                                <p className="text-sm font-medium text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap">
                                    {log.description || `${log.action || 'Action'} - ${log.entity_type || 'Entity'}`}
                                </p>
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-xs text-gray-500">
                                        {formatDateTime(log.createdAt)}
                                    </p>
                                    <div className="notification-icon">
                                        {getNotificationIcon(log.action)}
                                    </div>
                                </div>
                                {log.user && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        by {log.user.fullName || log.user.email}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <button className="view-more-button">
                View More
            </button> */}

            <div className="device-alerts-section">
                <div className="flex justify-between items-center">
                    <h3 className="device-alerts-title">Device Alerts/Recall</h3>
                    <div className="three-dots-icon">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </div>
                </div>
                {recallLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading recall alerts...</p>
                    </div>
                ) : recallError ? (
                    <div className="error-container">
                        <p className="error-message">{recallError}</p>
                        {/* <button onClick={fetchRecallAlerts} className="retry-button">
                            Try Again
                        </button> */}
                    </div>
                ) : recallAlerts.length === 0 ? (
                    <div className="no-activity">
                        <p>No recall alerts found</p>
                    </div>
                ) : (
                    <div className="device-alerts-list">
                        {recallAlerts.slice(0, 5).map((alert) => (
                            <div key={alert.id} className="device-alert-item">
                                <div>
                                    <p className="device-alert-title">{alert.title}</p>
                                    <p className="device-alert-desc">{alert.description}</p>
                                </div>
                                <span className="device-alert-time">{formatDateTime(alert.timestamp)}</span>
                            </div>
                        ))}
                    </div>
                )}
                <button className="view-more-button" onClick={fetchRecallAlerts}>
                    Refresh
                </button>
            </div>
        </div>
    )
}

export default ActivityLog