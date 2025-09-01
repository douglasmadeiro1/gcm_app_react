import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true); // submenu aberto por padrão

    return (
        <aside className="sidebar">
            <h2
                style={{ marginBottom: "20px", cursor: "pointer" }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Documentos {isOpen ? "▾" : "▸"}
            </h2>
            {isOpen && (
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/registers/day-shift">🌞 Plantão diurno</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registers/night-shift">🌙 Plantão noturno</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registers/report-of-manager">📝 Relatório encarregado</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registers/patrol-report">🚓 Relatório patrulhamento</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registers/patrol-report-romo">🏍️ Patrulhamento - Romo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registers/release-term">📄 Termo de liberação</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </aside>
    );
};

export default Sidebar;
