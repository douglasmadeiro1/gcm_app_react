import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./DashboardPage.css";

// Imagens
import documentosImg from "../../assets/image/documentos.png";
import patrimoniosImg from "../../assets/image/patrimonios.png";
import contactsImg from "../../assets/image/contacts.png";
import relatoriosImg from "../../assets/image/relatorios.png";
import veiculo2Img from "../../assets/image/veiculo2.png";
import comercioImg from "../../assets/image/comercio.png";
import notificacaoImg from "../../assets/image/notificacao.png";
import autuacaoImg from "../../assets/image/autuacao.png";
import equipeImg from "../../assets/image/equipe.png";

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

    // Cards da dashboard
    const cards = [
        {
            img: documentosImg,
            title: "Documentos",
            desc: "Documentos utilizados no dia a dia dos plantões",
            path: "/registers",
        },
        {
            img: patrimoniosImg,
            title: "Patrimônios",
            desc: "Cadastro e visualização de informações de patrimônios públicos do município",
            path: "/tools/places",
        },
        {
            img: contactsImg,
            title: "Contatos",
            desc: "Agenda telefônica com os principais contatos utilizados",
            path: "/tools/contacts",
        },
        {
            img: relatoriosImg,
            title: "Relatórios",
            desc: "Criação de gráficos de estatística de ocorrências com base nos talões abertos",
            path: "/stats",
        },
        {
            img: veiculo2Img,
            title: "Veículos em Abandono",
            desc: "Cadastro das notificações de veículos em estado de abandono para acompanhamento",
            path: "/tools/vehicles",
        },
        {
            img: comercioImg,
            title: "Estabelecimentos",
            desc: "Cadastro de informações sobre estabelecimentos comerciais da cidade",
            path: "/tools/commercial",
        },
        {
            img: notificacaoImg,
            title: "Notificações",
            desc: "Gerenciamento das notificações de postura aplicadas pelas equipes",
            path: "/tools/notification",
        },
        {
            img: autuacaoImg,
            title: "Autuações",
            desc: "Gerenciamento dos autos de infração aplicados pelas equipes",
            path: "/tools/infringement",
        },
        {
            img: equipeImg,
            title: "Gerenciamento da equipe",
            desc: "Informações e registros de dados dos agentes da Guarda Civil Municipal",
            path: "/tools/agents",
        },
    ];

    return (
        <main className="main-content">
            {/* Topbar fixa */}
            <header className="topbar">
                <h2>Sistema GCM</h2>
                <div className="topbar-actions">
                    <button id="themeToggle" className="icon-btn" onClick={handleToggleTheme}>
                        {isDarkTheme ? "☀️" : "🌓"}
                    </button>
                    <button className="icon-btn logout-btn" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Sair
                    </button>
                </div>
            </header>

            {/* Grid de Cards */}
            <section className="cards-grid">
                {cards.map((c, i) => (
                    <div
                        key={i}
                        className="card"
                        onClick={() => navigate(c.path)}
                    >
                        <img src={c.img} alt={c.title} />
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default DashboardPage;
