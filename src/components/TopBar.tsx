// src/components/TopBar.tsx
import React from 'react';
import NotificationDropdown from '../../src/pages/commercial/components/NotificationDropdown';

const TopBar = ({ title, onOpenEstablishment }) => {
    return (
        <div className="top-bar">
            <button id="menu-toggle" className="menu-toggle">☰</button>
            <h1 className="top-bar-title">{title}</h1>
            <NotificationDropdown onOpenEstablishment={onOpenEstablishment} />
        </div>
    );
};

export default TopBar;