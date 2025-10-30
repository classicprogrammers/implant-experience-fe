import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import deviceImage from '../../../assets/images/Device.png'
import { api } from '../../../utils/api'

const DeviceCard = () => {
    // Dummy data for development - matching the image data
    const dummyDevices = [
        {
            id: 1,
            device_master: {
                brand: "Device Name",
                model: "Model"
            },
            manufacturer: "Device Name",
            model: "Model",
            implant_date: "2025-02-02",
            status: "active"
        },
        {
            id: 2,
            device_master: {
                brand: "Device Name",
                model: "Model"
            },
            manufacturer: "Device Name",
            model: "Model",
            implant_date: "2025-02-02",
            status: "active"
        },
        {
            id: 3,
            device_master: {
                brand: "Device Name",
                model: "Model"
            },
            manufacturer: "Device Name",
            model: "Model",
            implant_date: "2025-02-02",
            status: "active"
        },
        {
            id: 4,
            device_master: {
                brand: "Device Name",
                model: "Model"
            },
            manufacturer: "Device Name",
            model: "Model",
            implant_date: "2025-02-02",
            status: "active"
        }
    ]

    const [devices, setDevices] = useState(dummyDevices)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 5

    // Fetch devices from API
    const fetchDevices = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await api.get('/devices')

            if (response.data?.success) {
                // Accept both shapes: { data: { devices: [] }} or { data: [] }
                const payload = response.data.data?.devices ?? response.data.data ?? []
                const list = Array.isArray(payload) ? payload : []
                setDevices(list)
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

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filteredDevices.length / pageSize))
    const safePage = Math.min(currentPage, totalPages)
    const startIdx = (safePage - 1) * pageSize
    const paginatedDevices = filteredDevices.slice(startIdx, startIdx + pageSize)

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
            case 'active':
                return 'status-badge status-active'
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
            case 'active':
                return 'status-dot status-dot-active'
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
                    <div className="filter-pill" title="Filter by device status">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="filter-select"
                            aria-label="Filter by Status"
                            style={{ paddingRight: '1.75rem', borderRadius: 12 }}
                        >
                            <option value="all">All Status</option>
                            <optgroup label="Statuses">
                                <option value="safe">Safe</option>
                                <option value="monitor">Monitor</option>
                                <option value="recall">Recall</option>
                                <option value="active">Active</option>
                            </optgroup>
                        </select>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5 8l5 5 5-5H5z" />
                        </svg>
                    </div>
                    {/* Priority filter hidden as requested */}
                    <div className="search-container-dashboard">
                        <input
                            type="text"
                            placeholder="Search devices..."
                            className="search-field"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg className="w-4 h-4 search-icon-dashboard" fill="currentColor" viewBox="0 0 20 20">
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
                    paginatedDevices.map((device) => (
                        <div key={device.id} className="table-row">
                            <div className="table-cell">
                                <div className="device-info">
                                    <div className="device-icon bg-[#F6F7F9]">
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
            {/* Pagination Controls */}
            {filteredDevices.length > pageSize && (
                <div className="pagination-controls" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                    <button
                        className="ocr-action-button"
                        style={{ width: 'auto', padding: '0.35rem 0.9rem' }}
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={safePage === 1}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className="ocr-action-button"
                            style={{
                                width: 'auto',
                                padding: '0.35rem 0.9rem',
                                background: safePage === i + 1 ? '#00ACB2' : '#E2E8F0',
                                color: safePage === i + 1 ? '#fff' : '#11142D'
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="ocr-action-button"
                        style={{ width: 'auto', padding: '0.35rem 0.9rem' }}
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={safePage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default DeviceCard