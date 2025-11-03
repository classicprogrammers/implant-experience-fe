import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import TopNavbar from '../components/navbar/TopNavbar'
import Dashboard from '../pages/dashbaord/Dashboard'
import MyDevices from '../pages/devices/MyDevices'
import DevicesList from '../pages/devices/DevicesList'
import NotificationPage from '../components/notification/NotificationPage'
import ResourcesPage from '../components/resources/ResourcesPage'
import SettingsPage from '../components/settings/SettingsPage'
import AddUserPage from '../pages/superAdmin/addUser/user'

const DashboardRoutes = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSidebarClose = () => {
        setIsSidebarOpen(false)
    }

    return (
        <div className="dashboard-layout">
            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
            <TopNavbar onMenuToggle={handleMenuToggle} />
            <div className="main-content">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/my-devices" element={<DevicesList />} />
                    <Route path="/my-devices/detail" element={<MyDevices />} />
                    <Route path="/notifications" element={<NotificationPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/admin/add-user" element={<AddUserPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default DashboardRoutes
