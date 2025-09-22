import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import TopNavbar from '../../components/navbar/TopNavbar'
import './Dashboard.css'

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
        <h1>Dashboard Page</h1>
        <p>This is an empty dashboard page.</p>
      </div>
    </div>
  )
}

export default Dashboard
