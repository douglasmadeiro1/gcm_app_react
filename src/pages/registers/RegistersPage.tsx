// src/pages/registers/RegistersPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Card from "../../components/Card";
import "./RegistersPage.css";

// Importa todas as imagens
import plantaoDiurnoImg from "../../assets/image/plantao-diurno.jpg";
import plantaoNoturnoImg from "../../assets/image/plantao-noturno.jpg";
import encarregadoFrenteImg from "../../assets/image/encarregado-frente.jpg";
import patrulhamentoFrenteImg from "../../assets/image/patrulhamento-frente.jpg";
import patrulhamentoRomoFrenteImg from "../../assets/image/patrulhamento-romo-frente.jpg";
import liberacaoImg from "../../assets/image/liberacao.jpg";

const RegistersPage = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const handleLogout = async () => {
        try {
            await signOut();
            navigate("/");
        } catch (error) {
            console.error("Erro ao sair:", error);
        }
    };

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    const handleToggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className="registers-container">
            <div className="topbar">
                <button onClick={() => navigate(-1)} className="icon-btn back-btn">
                    ⬅ Voltar
                </button>
                <h2>Documentos</h2>
                <div className="topbar-actions">
                    <button id="themeToggle" className="icon-btn" onClick={handleToggleTheme}>
                        {isDarkTheme ? "☀️" : "🌓"}
                    </button>
                    <button className="icon-btn logout-btn" onClick={handleLogout}>
                        Sair
                    </button>
                </div>
            </div>

            <main className="main-content">
                <div className="cards-grid">
                    <Card
                        imageUrl={plantaoDiurnoImg}
                        title="Plantão Diurno"
                        description="Visualize os relatórios do plantão diurno"
                        onClick={() => navigate("/registers/day-shift")}
                    />
                    <Card
                        imageUrl={plantaoNoturnoImg}
                        title="Plantão Noturno"
                        description="Visualize os relatórios do plantão noturno"
                        onClick={() => navigate("/registers/night-shift")}
                    />
                    <Card
                        imageUrl={encarregadoFrenteImg}
                        title="Relatório Encarregado"
                        description="Confira os relatórios do encarregado"
                        onClick={() => navigate("/registers/report-of-manager")}
                    />
                    <Card
                        imageUrl={patrulhamentoFrenteImg}
                        title="Patrulhamento"
                        description="Relatórios de patrulhamento"
                        onClick={() => navigate("/registers/patrol-report")}
                    />
                    <Card
                        imageUrl={patrulhamentoRomoFrenteImg}
                        title="Patrulhamento - Romo"
                        description="Relatórios de patrulhamento Romo"
                        onClick={() => navigate("/registers/patrol-report-romo")}
                    />
                    <Card
                        imageUrl={liberacaoImg}
                        title="Termo de Liberação"
                        description="Visualize os termos de liberação"
                        onClick={() => navigate("/registers/release-term")}
                    />
                </div>
            </main>
        </div>
    );
};

export default RegistersPage;