import React from 'react';
import './DashboardPage.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default Dashboard;
