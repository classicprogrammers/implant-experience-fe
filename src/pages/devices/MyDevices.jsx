import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeviceImage from '../../assets/images/Device-2.png'
import Implanted from '../../assets/images/DeviceBlack.png'
import Followup from '../../assets/images/Followup.png'
import Status from '../../assets/images/Status.png'
import SaftetyCheck from '../../assets/images/Shield.png'
import msgJenifer from '../../assets/images/msgJenifer.png';
import calendarSilhouette from '../../assets/images/calendarSilhouette.png';
import actionReport from '../../assets/images/actionReport.png';
import deviceGuide from '../../assets/images/deviceGuide.png';


import './MyDevices.css'

const MyDevices = () => {
    const [activeTab, setActiveTab] = useState('history')

    const timelineEvents = [
        {
            id: 1,
            type: 'implant',
            title: 'Device Implanted',
            description: 'Successfully Implanted by Dr. Jennifer',
            date: 'September 12, 2023',
            icon: Implanted,
            statusColor: '#DCFCE7'
        },
        {
            id: 2,
            type: 'followup',
            title: 'First Follow-up',
            description: 'Routine Checkup completed successfully',
            date: 'December 15, 2023',
            icon: Followup,
            statusColor: '#DBEAFE'
        },
        {
            id: 3,
            type: 'status',
            title: 'Status Update',
            description: 'Move to monitor status for routine observation',
            date: 'January 3, 2025',
            icon: Status,
            statusColor: '#FEF9C3'
        },
        {
            id: 4,
            type: 'safety',
            title: 'Safety Check Complete',
            description: 'Monthly safely review passed',
            date: 'January 5, 2025',
            icon: SaftetyCheck,
            statusColor: '#DCFCE7'
        }
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

    const quickActions = [
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
                        <button className="action-button download-report">
                            Download Report
                        </button>
                    </div>
                </div>

                <div className="my-devices-grid">
                    {/* Left Column */}
                    <div className="left-column">
                        {/* Device Information Card */}
                        <div className="device-info-card">


                            <div className="device-info-content">
                                <div className="device-details-left">
                                    <div className="device-info-header">
                                        <div className="device-icon bg-[#00ACB2]">
                                            <div className="rocket-icon">
                                                {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#20b2aa" />
                                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="white" strokeWidth="1" />
                                        </svg> */}
                                                <img src={DeviceImage} alt="" />
                                            </div>
                                        </div>
                                        <h2 className="device-info-title">Device Information</h2>
                                    </div>
                                    <div className="info-item bg-white  rounded-lg">
                                        <span className="info-label text-[#2E2C34]">Model</span>
                                        <span className="info-value-text text-[#2E2C34]">Boston Scientific Precision Plus</span>
                                    </div>
                                    <div className="info-item bg-white text-[#2E2C34] rounded-lg flex items-between py-[10px] ">
                                        <span className="info-label">Status</span>
                                        <div className="status-container">
                                            <div className="status-dot"></div>
                                            <span className="status-text">Active</span>
                                        </div>
                                    </div>
                                    <div className="info-item bg-white rounded-lg">
                                        <span className="info-label">Device ID UDI</span>
                                        <span className="info-value-text">S2021*****983242</span>
                                    </div>
                                </div>

                                <div className="device-details-right">
                                    <div className="info-item-right">
                                        <span className="info-label-right">Implant Date</span>
                                        <span className="info-value-right">September 21, 2024</span>
                                    </div>
                                    <div className="info-item-right">
                                        <span className="info-label-right">Heath Provider</span>
                                        <span className="info-value-right">Dr. Jennifer</span>
                                    </div>
                                    <div className="info-item-right">
                                        <span className="info-label-right">Last Safety Check</span>
                                        <span className="info-value-right">January 05, 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Device Timeline */}
                        <div className="device-timeline-card">
                            <div className="timeline-tabs">
                                <button
                                    className={`timeline-tab ${activeTab === 'history' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('history')}
                                >
                                    <div className="tab-indicator"></div>
                                    History
                                </button>
                                <button
                                    className={`timeline-tab ${activeTab === 'alerts' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('alerts')}
                                >
                                    Alerts
                                </button>
                                <button
                                    className={`timeline-tab ${activeTab === 'resource' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('resource')}
                                >
                                    Resource
                                </button>
                            </div>

                            <h3 className="timeline-title">Device Timeline</h3>

                            <div className="timeline-container">
                                {timelineEvents.map((event, index) => (
                                    <div key={event.id} className="timeline-item">
                                        <div className="timeline-icon">
                                            <span className="event-icon" style={{
                                                backgroundColor: event.statusColor,
                                            }}><img src={event.icon} alt="" style={{ width: '14px', height: '14px' }} /></span>
                                        </div>
                                        <div className="timeline-content bg-[#FAFCFB] p-[10px] rounded-lg">
                                            <div className="timeline-event-title">{event.title}</div>
                                            <div style={{ lineHeight: '0.8rem' }}>
                                                <div className="timeline-event-description">{event.description}</div>
                                                <div className="timeline-event-date">{event.date}</div>
                                            </div>
                                        </div>
                                        {index < timelineEvents.length - 1 && <div className="timeline-line"></div>}
                                    </div>
                                ))}
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
                        <div className="quick-actions-card">
                            <h3 className="quick-actions-title">Quick Actions</h3>
                            <div className="quick-actions-list">
                                {quickActions.map((action) => (
                                    <button key={action.id} className="quick-action-item">
                                        <img src={action.icon} alt="" className="action-icon" />
                                        <span className="action-title">{action.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDevices
