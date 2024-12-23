import React, { useState } from 'react';
const SideBar = ({

  isOpen,
  onClose,
  children,
  width = '250px',
  position = 'left',
}) => {
  const SideBarStyle = {
    position: 'fixed',
    top: 0,
    [position]: 0, // Position based on the 'position' prop
    height: '100vh',
    width: width,
    backgroundColor: '#000718', // Light gray background
    borderRight: position === 'left' ? '1px solid #dee2e6' : undefined,
    borderLeft: position === 'right' ? '1px solidrgba(0, 0, 0, 0.83)' : undefined,
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    transition: 'transform 0.5s ease-in-out',
    transform: isOpen ? 'translateX(0)' : position === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
    zIndex: 1000, // Ensure it's above other content
    overflowY: 'auto', // Allow scrolling if content overflows
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'hsla(223, 100.00%, 4.70%, 0.64)',
    zIndex: 999,
    display: isOpen ? 'block' : 'none',
    cursor: 'pointer',
  };

  return (
    <>
      {isOpen && <div style={overlayStyle} onClick={onClose} />}
      <div style={SideBarStyle}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>
            ×
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default SideBar;