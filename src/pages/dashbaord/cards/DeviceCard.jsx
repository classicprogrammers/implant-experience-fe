import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import deviceImage from '../../../assets/images/Device.png'
import { api } from '../../../utils/api'

const DeviceCard = () => {
    const [devices, setDevices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    // Fetch devices from API
    const fetchDevices = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await api.get('/devices')
            
            if (response.data.success && Array.isArray(response.data.data.devices)) {
                setDevices(response.data.data.devices)
            } else {
                setError('Failed to fetch devices')
                setDevices([]) // Ensure devices is always an array
            }
        } catch (err) {
            console.error('Error fetching devices:', err)
            setError('Failed to load devices. Please try again.')
            setDevices([]) // Ensure devices is always an array
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDevices()
    }, [])

    // Filter devices based on search term and status
    const filteredDevices = Array.isArray(devices) ? devices.filter(device => {
        const matchesSearch = 
            device.device_master?.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            device.device_master?.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            device.manufacturer?.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesStatus = statusFilter === 'all' || device.status === statusFilter
        
        return matchesSearch && matchesStatus
    }) : []

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A'
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            month: '2-digit', 
            day: '2-digit', 
            year: '2-digit' 
        })
    }

    // Get status badge class based on device status
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'safe':
                return 'status-badge status-safe'
            case 'monitor':
                return 'status-badge status-monitor'
            case 'recall':
                return 'status-badge status-recall'
            default:
                return 'status-badge'
        }
    }

    // Get status dot class based on device status
    const getStatusDotClass = (status) => {
        switch (status) {
            case 'safe':
                return 'status-dot status-dot-safe'
            case 'monitor':
                return 'status-dot status-dot-monitor'
            case 'recall':
                return 'status-dot status-dot-recall'
            default:
                return 'status-dot'
        }
    }

    if (loading) {
        return (
            <div className="devices-card md:me-[20px]">
                <div className="devices-header">
                    <h2 className="devices-title">My Devices</h2>
                </div>
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading devices...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="devices-card md:me-[20px]">
                <div className="devices-header">
                    <h2 className="devices-title">My Devices</h2>
                </div>
                <div className="error-container">
                    <p className="error-message">{error}</p>
                    <button onClick={fetchDevices} className="retry-button">
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="devices-card md:me-[20px]">
            <div className="devices-header">
                <Link to="/my-devices" className="devices-title-link">
                    <h2 className="devices-title">My Devices</h2>
                </Link>
                <div className="devices-controls">
                    <div className="filter-pill">
                        <select 
                            value={statusFilter} 
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Status</option>
                            <option value="safe">Safe</option>
                            <option value="monitor">Monitor</option>
                            <option value="recall">Recall</option>
                        </select>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 8l5 5 5-5H5z" />
                        </svg>
                    </div>
                    <div className="filter-pill">
                        <span>All Priority</span>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 8l5 5 5-5H5z" />
                        </svg>
                    </div>
                    <div className="search-container-dashboard">
                        <input 
                            type="text" 
                            placeholder="Search devices..." 
                            className="search-field"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg className="w-4 h-4 search-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="devices-table">
                <div className="table-header">
                    <div className="header-cell">Name</div>
                    <div className="header-cell">Model</div>
                    <div className="header-cell">Implant Date</div>
                    <div className="header-cell">Status</div>
                </div>
                {!Array.isArray(filteredDevices) || filteredDevices.length === 0 ? (
                    <div className="no-devices">
                        <p>No devices found</p>
                    </div>
                ) : (
                    filteredDevices.map((device) => (
                        <div key={device.id} className="table-row">
                            <div className="table-cell">
                                <div className="device-info">
                                    <div className="device-icon">
                                        <img src={deviceImage} alt="Device" width="20" height="20" />
                                    </div>
                                    <span>{device.device_master?.brand || device.manufacturer || 'Unknown Device'}</span>
                                </div>
                            </div>
                            <div className="table-cell">
                                {device.device_master?.model || device.model || 'N/A'}
                            </div>
                            <div className="table-cell">
                                {formatDate(device.implant_date)}
                            </div>
                            <div className="table-cell">
                                <div className={getStatusBadgeClass(device.status)}>
                                    <div className={getStatusDotClass(device.status)}></div>
                                    <span className="capitalize">{device.status || 'Unknown'}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default DeviceCard