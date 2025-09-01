import React from "react";

interface TopbarProps {
    isDark: boolean;
    onToggleTheme: () => void;
    onLogout: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ isDark, onToggleTheme, onLogout }) => {
    return (
        <header className="topbar">
            <h2>Sistema GCM</h2>
            <div className="topbar-actions">
                <button onClick={onToggleTheme} className="icon-btn">
                    <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
                </button>
                <button onClick={onLogout} className="icon-btn logout-btn">
                    <i className="fas fa-sign-out-alt"></i> Sair
                </button>
            </div>
        </header>
    );
};

export default Topbar;
