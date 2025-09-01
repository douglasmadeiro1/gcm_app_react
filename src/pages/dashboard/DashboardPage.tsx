import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
    return (
        <div className="dashboard-container" style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardPage;
