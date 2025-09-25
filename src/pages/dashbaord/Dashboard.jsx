import React from 'react'
import './Dashboard.css'
import TodayStats from './cards/TodayStats'
import DeviceCard from './cards/DeviceCard'
import ActivityLog from './cards/ActivityLog'

function Dashboard() {
  return (
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
  )
}

export default Dashboard
