import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardsGrid from "./components/CardsGrid";
import Topbar from "./components/TopBar";
import { useAuth } from "../../hooks/useAuth";

import documentosImg from "../../assets/image/documentos.png";
import patrimoniosImg from "../../assets/image/patrimonios.png";
import contactsImg from "../../assets/image/contacts.png";
import relatoriosImg from "../../assets/image/relatorios.png";
import veiculoImg from "../../assets/image/veiculo2.png";
import comercioImg from "../../assets/image/comercio.png";
import notificacaoImg from "../../assets/image/notificacao.png";
import autuacaoImg from "../../assets/image/autuacao.png";

import "./DashboardPage.css";

const DashboardPage: React.FC = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const cards = [
        { title: "Documentos", desc: "Documentos utilizados no dia a dia", image: documentosImg, path: "/registers" },
        { title: "Patrimônios", desc: "Cadastro de patrimônios", image: patrimoniosImg, path: "/places" },
        { title: "Contatos", desc: "Agenda telefônica", image: contactsImg, path: "/contacts" },
        { title: "Relatórios", desc: "Gráficos e estatísticas", image: relatoriosImg, path: "/releases" },
        { title: "Veículos em Abandono", desc: "Cadastro de veículos abandonados", image: veiculoImg, path: "/tools/abandoned_vehicles" },
        { title: "Estabelecimentos", desc: "Cadastro de estabelecimentos", image: comercioImg, path: "/tools/commercial" },
        { title: "Notificações", desc: "Gerenciamento de notificações", image: notificacaoImg, path: "/tools/notification" },
        { title: "Autuações", desc: "Gerenciamento de autos de infração", image: autuacaoImg, path: "/tools/infringement" },
    ];

    return (
        <main className="main-content">
            <Topbar
                isDark={isDark}
                onToggleTheme={() => setIsDark(!isDark)}
                onLogout={signOut}
            />
            <CardsGrid cards={cards} onNavigate={(path) => navigate(path)} />
        </main>
    );
};

export default DashboardPage;
