import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import TopNavbar from '../components/navbar/TopNavbar'
import Dashboard from '../pages/dashbaord/Dashboard'
import MyDevices from '../pages/devices/MyDevices'
import DevicesList from '../pages/devices/DevicesList'
import NotificationPage from '../components/notification/NotificationPage'
import ResourcesPage from '../components/resources/ResourcesPage'
import BlogDetailPage from '../pages/resources/BlogDetailPage'
import SettingsPage from '../components/settings/SettingsPage'
import AddUserPage from '../pages/superAdmin/addUser/user'
import MyPlan from '../pages/myplan/MyPlan'
import UpgradePlan from '../pages/myplan/UpgradePlan'

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
                    <Route path="/resources/blog/:blogId" element={<BlogDetailPage />} />
                    <Route path="/my-plan" element={<MyPlan />} />
                    <Route path="/my-plan/upgrade" element={<UpgradePlan />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/admin/add-user" element={<AddUserPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default DashboardRoutes
