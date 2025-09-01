import React from "react";
import "./TopbarRegisters.css";

interface TopbarRegistersProps {
    title?: string;
    onBack?: () => void;
    onToggleTheme?: () => void;
    onLogout?: () => void;
    isDark?: boolean;
}

const TopbarRegisters: React.FC<TopbarRegistersProps> = ({
    title = "Documentos",
    onBack,
    onToggleTheme,
    onLogout,
    isDark = false,
}) => {
    return (
        <div className="topbar">
            <button className="icon-btn back-btn" onClick={onBack}>
                ⬅ Voltar
            </button>
            <h2>{title}</h2>
            <div className="topbar-actions">
                <button className="icon-btn" onClick={onToggleTheme}>
                    {isDark ? "☀️" : "🌓"}
                </button>
                <button className="icon-btn logout-btn" onClick={onLogout}>
                    Sair
                </button>
            </div>
        </div>
    );
};

export default TopbarRegisters;
