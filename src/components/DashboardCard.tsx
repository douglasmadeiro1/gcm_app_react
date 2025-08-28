import React from "react";

interface DashboardCardProps {
    title: string;
    value: number;
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
    return (
        <div className="dashboard-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}
