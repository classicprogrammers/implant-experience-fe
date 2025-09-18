import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = () => {
    // Simulate logout
    console.log('Logging out...')
    // In a real app, you would clear tokens and redirect to login
    window.location.href = '/'
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1>Dashboard</h1>
            <p>Welcome back! Here's what's happening with your implants.</p>
          </div>
          <div className="header-right">
            <button onClick={handleLogout} className="btn btn-outline">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <nav className="dashboard-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'implants' ? 'active' : ''}`}
            onClick={() => setActiveTab('implants')}
          >
            Implants
          </button>
          <button 
            className={`nav-item ${activeTab === 'patients' ? 'active' : ''}`}
            onClick={() => setActiveTab('patients')}
          >
            Patients
          </button>
          <button 
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </button>
        </nav>

        <main className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2>Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Implants</h3>
                  <p className="stat-number">1,247</p>
                  <span className="stat-change positive">+12% from last month</span>
                </div>
                <div className="stat-card">
                  <h3>Active Patients</h3>
                  <p className="stat-number">892</p>
                  <span className="stat-change positive">+8% from last month</span>
                </div>
                <div className="stat-card">
                  <h3>Pending Procedures</h3>
                  <p className="stat-number">23</p>
                  <span className="stat-change negative">-3 from last week</span>
                </div>
                <div className="stat-card">
                  <h3>Success Rate</h3>
                  <p className="stat-number">98.5%</p>
                  <span className="stat-change positive">+0.2% from last month</span>
                </div>
              </div>
              
              <div className="recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">📋</div>
                    <div className="activity-content">
                      <p>New implant procedure completed for Patient #1234</p>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">✅</div>
                    <div className="activity-content">
                      <p>Follow-up appointment scheduled for Patient #1230</p>
                      <span className="activity-time">4 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📊</div>
                    <div className="activity-content">
                      <p>Monthly report generated successfully</p>
                      <span className="activity-time">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'implants' && (
            <div className="tab-content">
              <h2>Implants Management</h2>
              <p>This section will contain implant management features.</p>
              <div className="placeholder-content">
                <p>🚧 Coming Soon: Implant tracking, inventory management, and more!</p>
              </div>
            </div>
          )}

          {activeTab === 'patients' && (
            <div className="tab-content">
              <h2>Patient Management</h2>
              <p>This section will contain patient management features.</p>
              <div className="placeholder-content">
                <p>🚧 Coming Soon: Patient records, appointment scheduling, and more!</p>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="tab-content">
              <h2>Reports & Analytics</h2>
              <p>This section will contain reporting and analytics features.</p>
              <div className="placeholder-content">
                <p>🚧 Coming Soon: Detailed reports, analytics dashboard, and more!</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
