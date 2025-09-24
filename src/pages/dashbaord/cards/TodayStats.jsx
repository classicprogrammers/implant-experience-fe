import React from 'react';
import group40321Image from '../../../assets/images/Group 40321.png'
import monitorImage from '../../../assets/images/monitoring (1) 1.png'
import gear1Image from '../../../assets/images/gear 1.png'
import arrowImage from '../../../assets/images/arrow.png'

const TodayStats = () => {
  return (
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
  )
}

export default TodayStats