import React from 'react';
import './Phone.css';

const Phone = ({ className }) => {
  return (
    <div className={className}>
      <div className="phone-screen">
        <div className="phone-header">
          <div className="phone-notch"></div>
        </div>
        <div className="phone-content">
          <div className="app-icon app-1">📱</div>
          <div className="app-icon app-2">💬</div>
          <div className="app-icon app-3">📷</div>
          <div className="app-icon app-4">🎵</div>
          <div className="app-icon app-5">📧</div>
          <div className="app-icon app-6">🌐</div>
        </div>
        <div className="phone-footer">
          <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
