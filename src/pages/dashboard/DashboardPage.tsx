// src/pages/dashboard/DashboardPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Card from "../../components/Card";
import "./DashboardPage.css";

// Importa todas as imagens
import documentosImg from "../../assets/image/documentos.png";
import patrimoniosImg from "../../assets/image/patrimonios.png";
import contactsImg from "../../assets/image/contacts.png";
import relatoriosImg from "../../assets/image/relatorios.png";
import veiculo2Img from "../../assets/image/veiculo2.png";
import comercioImg from "../../assets/image/comercio.png";
import notificacaoImg from "../../assets/image/notificacao.png";
import autuacaoImg from "../../assets/image/autuacao.png";

const DashboardPage = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    const handleLogout = async () => {
        try {
            await signOut();
            navigate("/");
        } catch (error) {
            console.error("Erro ao sair:", error);
        }
    };

    const handleToggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <main className="main-content">
            <header className="topbar">
                <h2>Sistema GCM</h2>
                <div className="topbar-actions">
                    <button id="toggle-theme" className="icon-btn" onClick={handleToggleTheme}>
                        <i className={`fas ${isDarkTheme ? "fa-sun" : "fa-moon"}`}></i>
                    </button>
                    <button className="icon-btn logout-btn" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Sair
                    </button>
                </div>
            </header>

            <section className="cards-grid">
                <Card
                    imageUrl={documentosImg}
                    title="Documentos"
                    description="Documentos utilizados no dia a dia dos plantões"
                    onClick={() => navigate("/registers")}
                />
                <Card
                    imageUrl={patrimoniosImg}
                    title="Patrimônios"
                    description="Cadastro e visualização de informações de patrimônios públicos do município"
                    onClick={() => navigate("/tools/places")}
                />
                <Card
                    imageUrl={contactsImg}
                    title="Contatos"
                    description="Agenda telefônica com os principais contatos utilizados"
                    onClick={() => navigate("/tools/contacts")}
                />
                <Card
                    imageUrl={relatoriosImg}
                    title="Relatórios"
                    description="Criação de gráficos de estatística de ocorrências com base nos talões abertos para atendimento"
                    onClick={() => navigate("/stats")}
                />
                <Card
                    imageUrl={veiculo2Img}
                    title="Veículos em Abandono"
                    description="Cadastro das notificações de veículos em estado de abandono para acompanhamento e consulta da situação (removido / pendente)"
                    onClick={() => navigate("/tools/vehicles")}
                />
                <Card
                    imageUrl={comercioImg}
                    title="Estabelecimentos"
                    description="Cadastro de informações sobre estabelecimentos comerciais localizados na cidade, consulta de situação e validade de alvarás"
                    onClick={() => navigate("/tools/commercial")}
                />
                <Card
                    imageUrl={notificacaoImg}
                    title="Notificações"
                    description="Gerenciamento das notificações de postura aplicadas pelas equipes e visualização da situação e prazo fornecido pelo agente para regularização"
                    onClick={() => navigate("/tools/notification")}
                />
                <Card
                    imageUrl={autuacaoImg}
                    title="Autuações"
                    description="Gerenciamento dos autos de infração aplicados pelas equipes"
                    onClick={() => navigate("/tools/infringement")}
                />
            </section>
        </main>
    );
};

export default DashboardPage;