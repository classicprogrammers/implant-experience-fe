import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import TopNavbar from '../../components/navbar/TopNavbar'
import group40321Image from '../../assets/images/Group 40321.png'
import monitorImage from '../../assets/images/monitoring (1) 1.png'
import gear1Image from '../../assets/images/gear 1.png'
import arrowImage from '../../assets/images/arrow.png'
import deviceImage from '../../assets/images/Device.png'
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
        <div className="grid grid-cols-12 gap-4">
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-8">
            {/* Today Section */}
            <div className="today-section">
              <h2 className="section-title">Today</h2>
              <div className="cards-container">
                {/* Safe Card - Active */}
                <div className="card safe-card active">
                  <div className="card-icon">
                    <img src={group40321Image} alt="Safe" width="20" height="20" />
                  </div>
                  <div className="card-content">
                    <span className="card-text">Safe</span>
                    <span className="card-subtitle">Any Text</span>
                  </div>
                  <div className="card-number">01</div>
                  <div className="card-arrow">
                    <img src={arrowImage} alt="Arrow" width="16" height="16" />
                  </div>
                </div>

                {/* Monitor Card - Inactive */}
                <div className="card monitor-card">
                  <div className="card-icon">
                    <img src={monitorImage} alt="Monitor" width="20" height="20" />
                  </div>
                  <div className="card-content">
                    <span className="card-text">Monitor</span>
                    <span className="card-subtitle">Any Text</span>
                  </div>
                  <div className="card-number">01</div>
                  <div className="card-arrow">
                    <img src={arrowImage} alt="Arrow" width="16" height="16" />
                  </div>
                </div>

                {/* Actions Card - Inactive */}
                <div className="card actions-card">
                  <div className="card-icon">
                    <img src={gear1Image} alt="Actions" width="20" height="20" />
                  </div>
                  <div className="card-content">
                    <span className="card-text">Actions</span>
                    <span className="card-subtitle">Any Text</span>
                  </div>
                  <div className="card-number">01</div>
                  <div className="card-arrow">
                    <img src={arrowImage} alt="Arrow" width="16" height="16" />
                  </div>
                </div>
              </div>
            </div>
            {/* Device Section */}
            <div className="devices-card md:me-[20px]">
              <div className="devices-header">
                <h2 className="devices-title">My Devices</h2>
                <div className="devices-controls">
                  <div className="filter-pill">
                    <span>All Status</span>
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
                    <input type="text" placeholder="Search..." className="search-field" />
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
                <div className="table-row">
                  <div className="table-cell">
                    <div className="device-info">
                      <div className="device-icon">
                        <img src={deviceImage} alt="Device" width="20" height="20" />
                      </div>
                      <span>Device Name</span>
                    </div>
                  </div>
                  <div className="table-cell">Model</div>
                  <div className="table-cell">2-02-25</div>
                  <div className="table-cell">
                    <div className="status-badge">
                      <div className="status-dot"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <div className="device-info">
                      <div className="device-icon">
                        <img src={deviceImage} alt="Device" width="20" height="20" />
                      </div>
                      <span>Device Name</span>
                    </div>
                  </div>
                  <div className="table-cell">Model</div>
                  <div className="table-cell">2-02-25</div>
                  <div className="table-cell">
                    <div className="status-badge">
                      <div className="status-dot"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <div className="device-info">
                      <div className="device-icon">
                        <img src={deviceImage} alt="Device" width="20" height="20" />
                      </div>
                      <span>Device Name</span>
                    </div>
                  </div>
                  <div className="table-cell">Model</div>
                  <div className="table-cell">2-02-25</div>
                  <div className="table-cell">
                    <div className="status-badge">
                      <div className="status-dot"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <div className="device-info">
                      <div className="device-icon">
                        <img src={deviceImage} alt="Device" width="20" height="20" />
                      </div>
                      <span>Device Name</span>
                    </div>
                  </div>
                  <div className="table-cell">Model</div>
                  <div className="table-cell">2-02-25</div>
                  <div className="table-cell">
                    <div className="status-badge">
                      <div className="status-dot"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - 4 columns */}
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-4">
            <div className="p-4">
              <div className="activity-log-container">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="activity-log-title">Activity Log</h3>
                  <div className="flex items-center gap-2">
                    <div className="pending-badge">
                      <span className="pending-text">Pending</span>
                      <div className="pending-count">0</div>
                    </div>
                  </div>
                </div>
                <div className="activity-list">
                  <div className="activity-card activity-card-pink">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Call Maria Rodriguez about test results</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500">10:30 AM</p>
                        <div className="notification-icon">
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="activity-card activity-card-white">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Review John Smith's MRI scan</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500">10:30 AM</p>
                        <div className="notification-icon">
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="activity-card activity-card-white">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Follow up with Emily Chen prescription</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500">2:00 PM</p>
                        <div className="notification-icon">
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="view-more-button">
                  View More
                </button>

                <div className="device-alerts-section">
                  <div className="flex justify-between items-center">
                    <h3 className="device-alerts-title">Device Alerts/Recall</h3>
                    <div className="three-dots-icon">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="device-alerts-list">
                    <div className="device-alert-item">
                      <div>
                        <p className="device-alert-title">Device Alerts</p>
                        <p className="device-alert-desc">Deleted 2 Item from Group Prime</p>
                      </div>
                      <span className="device-alert-time">Just now</span>
                    </div>
                    <div className="device-alert-item">
                      <div>
                        <p className="device-alert-title">Device Alerts</p>
                        <p className="device-alert-desc">Added 2 Item to Group Prime</p>
                      </div>
                      <span className="device-alert-time">15 mins ago</span>
                    </div>
                    <div className="device-alert-item">
                      <div>
                        <p className="device-alert-title">Device Alerts</p>
                        <p className="device-alert-desc">Added 2 Item to Group Prime</p>
                      </div>
                      <span className="device-alert-time">15 mins ago</span>
                    </div>
                  </div>
                  <button className="view-more-button">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div >
  )
}

export default Dashboard
