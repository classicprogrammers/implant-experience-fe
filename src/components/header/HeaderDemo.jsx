import React from 'react';
import Header from './Header';

const HeaderDemo = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Landing Page Header Demo */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Landing Page Header</h2>
        <Header variant="landing" />
        <div style={{ height: '400px', background: '#f0f0f0', padding: '2rem' }}>
          <p>This is the landing page header with top banner and navigation.</p>
        </div>
      </div>

      {/* Dashboard Header Demo */}
      <div>
        <h2>Dashboard Header</h2>
        <Header variant="dashboard" />
        <div style={{ height: '400px', background: '#f0f0f0', padding: '2rem', marginTop: '80px' }}>
          <p>This is the dashboard header with search and user info.</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemo;
