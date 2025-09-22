import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const getToastStyles = () => {
    const baseStyles = {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      fontSize: '14px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease-in-out',
      transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
      opacity: isVisible ? 1 : 0,
      cursor: 'pointer',
      maxWidth: '300px',
    };

    if (type === 'success') {
      return {
        ...baseStyles,
        backgroundColor: '#10b981',
        border: '1px solid #059669',
      };
    }

    if (type === 'error') {
      return {
        ...baseStyles,
        backgroundColor: '#ef4444',
        border: '1px solid #dc2626',
      };
    }

    if (type === 'info') {
      return {
        ...baseStyles,
        backgroundColor: '#3b82f6',
        border: '1px solid #2563eb',
      };
    }

    return baseStyles;
  };

  const getIcon = () => {
    if (type === 'success') return '✓';
    if (type === 'error') return '✕';
    if (type === 'info') return 'ℹ';
    return '✓';
  };

  return (
    <div style={getToastStyles()} onClick={handleClose}>
      <span style={{ fontSize: '16px' }}>{getIcon()}</span>
      <span>{message}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
          padding: '0',
          marginLeft: 'auto',
          opacity: '0.7',
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
