import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import TopNavbar from '../../components/navbar/TopNavbar'

import './Dashboard.css'
import TodayStats from './cards/TodayStats'
import DeviceCard from './cards/DeviceCard'
import ActivityLog from './cards/ActivityLog'

function Dashboard() {
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
        <div className="grid grid-cols-12 gap-4">
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-8">
            <TodayStats />
            <DeviceCard />
          </div>

          <div className="sm:col-span-12 md:col-span-12 lg:col-span-4">
            <div className="p-4">
              <ActivityLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
