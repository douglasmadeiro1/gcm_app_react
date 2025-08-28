import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default Dashboard;
