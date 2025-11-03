import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeviceCard from '../dashbaord/cards/DeviceCard'

const DevicesList = () => {
    const navigate = useNavigate()
    const [selectedId, setSelectedId] = useState(null)

    const handleDeviceClick = (device) => {
        setSelectedId(device?.id ?? null)
        navigate('/my-devices/detail', { state: { device } })
    }

    return (
        <div className="devices-page-container">
            <DeviceCard
                onDeviceClick={handleDeviceClick}
                selectedDeviceId={selectedId}
                disableLink={true}
            />
        </div>
    )
}

export default DevicesList


