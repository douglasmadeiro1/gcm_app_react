import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardsGrid from "./components/CardsGrid";
import { Card } from "./types";
import "./RegistersPage.css";

import dayShiftImg from "../../../assets/image/plantao-diurno.jpg";
import nightShiftImg from "../../../assets/image/plantao-noturno.jpg";
import managerImg from "../../../assets/image/encarregado-frente.jpg";
import patrolImg from "../../../assets/image/patrulhamento-frente.jpg";
import romoImg from "../../../assets/image/patrulhamento-romo-frente.jpg";
import releaseImg from "../../../assets/image/liberacao.jpg";

const RegistersPage: React.FC = () => {
    const navigate = useNavigate();

    // Lê o tema do localStorage ao iniciar
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    // Atualiza a classe do body e salva no localStorage
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    const cards: Card[] = [
        { id: 1, title: "Plantão Diurno", description: "Visualize os relatórios do plantão diurno", image: dayShiftImg, onClick: () => navigate("/registers/day-shift") },
        { id: 2, title: "Plantão Noturno", description: "Visualize os relatórios do plantão noturno", image: nightShiftImg, onClick: () => navigate("/registers/night-shift") },
        { id: 3, title: "Relatório Encarregado", description: "Confira os relatórios do encarregado", image: managerImg, onClick: () => navigate("/registers/report-of-manager") },
        { id: 4, title: "Patrulhamento", description: "Relatórios de patrulhamento", image: patrolImg, onClick: () => navigate("/registers/patrol-report") },
        { id: 5, title: "Patrulhamento Romo", description: "Relatórios de patrulhamento Romo", image: romoImg, onClick: () => navigate("/registers/patrol-report-romo") },
        { id: 6, title: "Termo de Liberação", description: "Visualize os termos de liberação", image: releaseImg, onClick: () => navigate("/registers/release-term") },
    ];

    return (
        <div className="registers-page">
            <div className="topbar">
                <button onClick={() => navigate(-1)} className="icon-btn back-btn">
                    ⬅ Voltar
                </button>
                <h2>Documentos</h2>
                <div className="topbar-actions">
                    <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
                        🌓
                    </button>
                    <button onClick={() => navigate("/logout")} className="icon-btn logout-btn">
                        Sair
                    </button>
                </div>
            </div>

            <main className="main-content">
                <CardsGrid cards={cards} />
            </main>
        </div>
    );
};

export default RegistersPage;
