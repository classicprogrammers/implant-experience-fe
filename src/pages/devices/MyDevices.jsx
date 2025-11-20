import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DeviceImage from '../../assets/images/Device-2.png'
import msgJenifer from '../../assets/images/msgJenifer.png';
import calendarSilhouette from '../../assets/images/calendarSilhouette.png';
import actionReport from '../../assets/images/actionReport.png';
import deviceGuide from '../../assets/images/deviceGuide.png';


import './MyDevices.css'
import { api } from '../../utils/api'

const DEFAULT_DEVICE_ID = '53a39029-a8af-4109-a432-5c91f14e1b25'

const extractAlertsList = (payload = {}) => {
    const candidates = [
        payload?.data?.alerts,
        payload?.data?.items,
        payload?.data?.recalls,
        payload?.alerts,
        payload?.items,
        payload?.recalls,
        payload?.data,
        payload,
    ]

    const list = candidates.find((entry) => Array.isArray(entry)) || []

    return list.map((item, index) => ({
        id: item.id || item._id || item.alertId || item.recallId || `alert-${index}`,
        title: item.title || item.notificationTitle || item.deviceName || item.device || 'Device alert',
        description:
            item.description ||
            item.summary ||
            item.reason ||
            item.details ||
            item.message ||
            'Please review this device alert.',
        timestamp:
            item.timestamp ||
            item.date ||
            item.createdAt ||
            item.updatedAt ||
            item.notifiedAt ||
            item.alertedAt ||
            null,
        severity: (item.severity || item.status || item.level || 'info').toLowerCase(),
    }))
}

const ALERT_SEVERITY_META = {
    critical: { icon: '!', bg: '#FEE2E2', color: '#B91C1C' },
    warning: { icon: '!', bg: '#FEF3C7', color: '#B45309' },
    alert: { icon: '!', bg: '#FEF3C7', color: '#B45309' },
    monitor: { icon: 'i', bg: '#E0F2FE', color: '#0369A1' },
    safe: { icon: 'S', bg: '#DCFCE7', color: '#15803D' },
    info: { icon: 'i', bg: '#E0F2FE', color: '#0369A1' },
}

const getSeverityMeta = (severity) => {
    const token = typeof severity === 'string' ? severity.toLowerCase() : 'info'
    return ALERT_SEVERITY_META[token] || ALERT_SEVERITY_META.info
}

const MyDevices = () => {
    const [activeTab, setActiveTab] = useState('alerts')
    const location = useLocation()
    const selectedDevice = location.state?.device || location.state?.selectedDevice || null
    const [deviceAlerts, setDeviceAlerts] = useState([])
    const [alertsLoading, setAlertsLoading] = useState(false)
    const [alertsError, setAlertsError] = useState(null)
    const resolvedDeviceId =
        selectedDevice?.id ||
        selectedDevice?._id ||
        selectedDevice?.device_id ||
        selectedDevice?.deviceId ||
        selectedDevice?.udi_di ||
        DEFAULT_DEVICE_ID

    const formatDisplayDate = (dateString) => {
        if (!dateString) return 'N/A'

        const parsed = new Date(dateString)
        if (Number.isNaN(parsed.getTime())) {
            return dateString
        }

        return parsed.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const statusToken = (selectedDevice?.status || '').toLowerCase()
    const statusStyleMap = {
        active: { dot: '#00ACB2', text: '#00ACB2' },
        safe: { dot: '#10B981', text: '#10B981' },
        monitor: { dot: '#D97706', text: '#D97706' },
        recall: { dot: '#DC2626', text: '#DC2626' }
    }
    const statusAppearance = statusStyleMap[statusToken] || { dot: '#94A3B8', text: '#475569' }
    const formattedStatus = statusToken ? `${statusToken.charAt(0).toUpperCase()}${statusToken.slice(1)}` : 'Unknown'

    const selectedDeviceManufacturer = selectedDevice?.device_master?.manufacturer || selectedDevice?.manufacturer || 'Unknown Manufacturer'
    const selectedDeviceUDI = selectedDevice?.udi_di || selectedDevice?.device_master?.udi || selectedDevice?.udi || 'Unavailable'
    const selectedDeviceImplantDate = formatDisplayDate(selectedDevice?.implant_date)
    const selectedDeviceProvider = selectedDevice?.provider_name || selectedDevice?.implant_physician || 'Not specified'
    const selectedDeviceSafetyCheck = (() => {
        const formatted = formatDisplayDate(selectedDevice?.last_safety_check)
        if (!selectedDevice?.last_safety_check || formatted === 'N/A') {
            return 'January 05, 2025'
        }
        return formatted
    })()

    const formatValue = (value, fallback = 'Not available') => {
        if (value === null || value === undefined) return fallback
        if (typeof value === 'string' && value.trim() === '') return fallback
        return value
    }

    const leftColumnDetails = [
        { label: 'Manufacturer', value: selectedDeviceManufacturer },
        { label: 'Status', value: formattedStatus, type: 'status' },
        { label: 'Device ID UDI', value: selectedDeviceUDI }
    ]

    const rightColumnDetails = [
        { label: 'Implant Date', value: selectedDeviceImplantDate },
        { label: 'Health Provider', value: selectedDeviceProvider },
        { label: 'Last Safety Check', value: selectedDeviceSafetyCheck }
    ]

    const statusAlerts = [
        {
            id: 1,
            message: 'Call Maria Rodriguez about test results',
            time: '10:30 AM'
        },
        {
            id: 2,
            message: 'Call Maria Rodriguez about test results',
            time: '10:30 AM'
        },
        {
            id: 3,
            message: 'Call Maria Rodriguez about test results',
            time: '10:30 AM'
        }
    ]

    const formatAlertTimestamp = (dateString) => {
        if (!dateString) return null
        const parsed = new Date(dateString)
        if (Number.isNaN(parsed.getTime())) return dateString
        return parsed.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        })
    }

    const fetchDeviceAlerts = useCallback(async () => {
        if (!resolvedDeviceId) return
        try {
            setAlertsLoading(true)
            setAlertsError(null)
            const response = await api.get(`/recalls/device/${resolvedDeviceId}`)
            setDeviceAlerts(extractAlertsList(response?.data))
        } catch (error) {
            console.error('Failed to load device alerts:', error)
            setAlertsError(error?.response?.data?.message || 'Failed to load alerts. Please try again.')
            setDeviceAlerts([])
        } finally {
            setAlertsLoading(false)
        }
    }, [resolvedDeviceId])

    useEffect(() => {
        fetchDeviceAlerts()
    }, [fetchDeviceAlerts])

    const QUICK_ACTIONS = [
        { id: 1, title: 'Message Dr. Jennifer', icon: msgJenifer },
        { id: 2, title: 'Schedule Appointment', icon: calendarSilhouette },
        { id: 3, title: 'Download Full Report', icon: actionReport },
        { id: 4, title: 'View Device Guide', icon: deviceGuide }
    ];


    return (
        <div className="my-devices-page">
            <div className="my-devices-content">
                {/* Header */}
                <div className="my-devices-header">
                    <div className="breadcrumb">
                        <Link to="/dashboard">Dashboard</Link>
                        <span className="breadcrumb-separator">{'>'}</span>
                        <span className="breadcrumb-current">My Devices</span>
                    </div>
                    <div className="header-actions">
                        <button className="action-button contact-provider">
                            Contact Provider
                        </button>
                        <button className="action-button download-report" onClick={() => window.print()}>
                            Download Report
                        </button>
                    </div>
                </div>

                <div className="my-devices-grid">
                    {/* Left Column */}
                    <div className="left-column">
                        {/* Device Information Card */}
                        <div className="device-info-card">
                            {selectedDevice ? (
                                <div className="device-info-content">
                                    <div className="device-details-left">
                                        <div className="device-info-header">
                                            <div className="device-icon bg-[#00ACB2]">
                                                <div className="rocket-icon">
                                                    <img src={DeviceImage} alt="" />
                                                </div>
                                            </div>
                                            <h2 className="device-info-title">Device Information</h2>
                                        </div>
                                        {leftColumnDetails.map((detail) => (
                                            <div key={detail.label} className="info-item bg-white rounded-lg">
                                                <span className="info-label">{detail.label}</span>
                                                {detail.type === 'status' ? (
                                                    <div className="status-container">
                                                        <div className="status-dot" style={{ background: statusAppearance.dot }}></div>
                                                        <span className="status-text" style={{ color: statusAppearance.text }}>{formattedStatus}</span>
                                                    </div>
                                                ) : (
                                                    <span className="info-value-text text-[#2E2C34]">{formatValue(detail.value)}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="device-details-right">
                                        {rightColumnDetails.map((detail) => (
                                            <div key={detail.label} className="info-item-right">
                                                <span className="info-label-right">{detail.label}</span>
                                                <span className="info-value-right">{formatValue(detail.value)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="device-info-empty">
                                    <h2 className="device-info-title">Select a device to view details</h2>
                                    <p className="device-info-subtitle">No device selected yet. Click a device from the dashboard to view its information here.</p>
                                </div>
                            )}
                        </div>

                        {/* Device Alerts */}
                        <div className="device-timeline-card">
                            <div className="timeline-tabs">
                                {/* <button
                                    className={`timeline-tab ${activeTab === 'history' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('history')}
                                >
                                    <div className="tab-indicator"></div>
                                    History
                                </button> */}
                                <button
                                    className={`timeline-tab ${activeTab === 'alerts' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('alerts')}
                                >
                                    <div className="tab-indicator"></div>
                                    Alerts
                                </button>
                            </div>

                            <h3 className="timeline-title">Alerts</h3>

                            <div
                                className="alerts-list-container"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    marginTop: '16px'
                                }}
                            >
                                {alertsLoading && (
                                    <div className="alerts-helper" style={{ color: '#475569' }}>
                                        Loading alerts...
                                    </div>
                                )}

                                {alertsError && (
                                    <div className="alerts-error" style={{ color: '#B91C1C' }}>
                                        <p style={{ marginBottom: '8px' }}>{alertsError}</p>
                                        <button
                                            onClick={fetchDeviceAlerts}
                                            style={{
                                                backgroundColor: '#00ACB2',
                                                color: '#fff',
                                                borderRadius: '999px',
                                                padding: '8px 16px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            Try again
                                        </button>
                                    </div>
                                )}

                                {!alertsLoading && !alertsError && deviceAlerts.length === 0 && (
                                    <div className="alerts-empty" style={{ color: '#94A3B8' }}>
                                        No alerts available for this device.
                                    </div>
                                )}

                                {deviceAlerts.map((alert) => {
                                    const severityMeta = getSeverityMeta(alert.severity)
                                    return (
                                        <div
                                            key={alert.id}
                                            className="alert-notification-card"
                                            style={{
                                                display: 'flex',
                                                gap: '16px',
                                                alignItems: 'center',
                                                padding: '16px',
                                                borderRadius: '16px',
                                                border: '1px solid #E2E8F0',
                                                backgroundColor: '#fff',
                                                boxShadow: '0px 1px 2px rgba(15, 23, 42, 0.05)'
                                            }}
                                        >
                                            <div
                                                className="alert-badge"
                                                style={{
                                                    backgroundColor: severityMeta.bg,
                                                    color: severityMeta.color,
                                                    width: '48px',
                                                    height: '48px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '12px',
                                                    fontWeight: 600
                                                }}
                                            >
                                                {severityMeta.icon}
                                            </div>
                                            <div className="alert-text" style={{ flex: 1 }}>
                                                <p className="alert-title" style={{ fontWeight: 600, color: '#0F172A' }}>
                                                    {alert.title}
                                                </p>
                                                <p
                                                    className="alert-description"
                                                    style={{ color: '#475569', marginTop: '4px', fontSize: '14px' }}
                                                >
                                                    {alert.description}
                                                </p>
                                                {alert.timestamp && (
                                                    <span
                                                        className="alert-timestamp"
                                                        style={{ fontSize: '12px', color: '#94A3B8', marginTop: '6px' }}
                                                    >
                                                        {formatAlertTimestamp(alert.timestamp)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="right-column">
                        {/* Status Card */}
                        <div className="status-card">
                            <h3 className="status-title">Status</h3>
                            <div className="status-alerts">
                                {statusAlerts.map((alert) => (
                                    <div key={alert.id} className="status-alert-item">
                                        <div className="alert-content">
                                            <p className="alert-message">{alert.message}</p>
                                            <p className="alert-time">{alert.time}</p>
                                        </div>
                                        <div className="alert-icon">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="view-more-button">View More</button>
                        </div>

                        {/* Quick Actions Card */}
                        {/* <div className="quick-actions-card">
                            <h3 className="quick-actions-title">Quick Actions</h3>
                            <div className="quick-actions-list">
                                {QUICK_ACTIONS.map((action) => (
                                    <button key={action.id} className="quick-action-item">
                                        <img src={action.icon} alt="" className="action-icon" />
                                        <span className="action-title">{action.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDevices
