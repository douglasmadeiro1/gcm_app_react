import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../firebase-init";
import {
    collection,
    onSnapshot,
    Unsubscribe,
    QuerySnapshot,
    DocumentData,
    QueryDocumentSnapshot,
} from "firebase/firestore";
import "./DashboardPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCarCrash, faUserShield, faStore, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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

// -----------------------------
// TIPAGENS
// -----------------------------
type ModuleType = "postura" | "veiculos" | "agentes" | "estabelecimentos";

interface Notification {
    id: string;
    message: string;
    link?: string;
    read?: boolean;
    [key: string]: any;
}

type Notifications = Record<ModuleType, Notification[]>;

// -----------------------------
// COMPONENT
// -----------------------------
const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
    );

    const [notifications, setNotifications] = useState<Notifications>({
        postura: [],
        veiculos: [],
        agentes: [],
        estabelecimentos: [],
    });

    const [activeDropdown, setActiveDropdown] = useState<ModuleType | null>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);

    // -----------------------------
    // THEME
    // -----------------------------
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
        setIsDarkTheme((prev) => !prev);
    };

    // -----------------------------
    // FIRESTORE NOTIFICATIONS
    // -----------------------------
    useEffect(() => {
        const unsubscribers: Unsubscribe[] = [];

        const moduleCollections: Record<ModuleType, ReturnType<typeof collection>> = {
            postura: collection(db, "notificacoes_postura"),
            veiculos: collection(db, "notificacoes_veiculos"),
            agentes: collection(db, "notificacoes_agentes"),
            estabelecimentos: collection(db, "notificacoes_estabelecimentos"),
        };

        (Object.entries(moduleCollections) as [ModuleType, ReturnType<typeof collection>][]).forEach(
            ([module, colRef]) => {
                const unsub = onSnapshot(colRef, (snapshot: QuerySnapshot<DocumentData>) => {
                    const docs: Notification[] = snapshot.docs.map(
                        (doc: QueryDocumentSnapshot<DocumentData>) => {
                            const data = doc.data() as Partial<Notification>;
                            return {
                                id: doc.id,
                                message: data.message || "",
                                read: data.read ?? false,
                                module: data.module || module,
                            };
                        }
                    );
                    setNotifications((prev) => ({
                        ...prev,
                        [module]: docs,
                    }));
                });
                unsubscribers.push(unsub);
            }
        );

        return () => unsubscribers.forEach((unsub) => unsub());
    }, []);

    // Fecha dropdown clicando fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                notificationsRef.current &&
                !notificationsRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // -----------------------------
    // RENDER NOTIFICATIONS
    // -----------------------------
    const renderNotifications = (moduleType: ModuleType) => {
        const notifs = notifications[moduleType];

        if (!notifs || notifs.length === 0) {
            return (
                <div className="notification-item no-notifications">
                    Nenhuma notificação.
                </div>
            );
        }

        return (
            <>
                <button
                    className="mark-all-read"
                    onClick={() =>
                        setNotifications((prev) => ({
                            ...prev,
                            [moduleType]: prev[moduleType].map(n => ({ ...n, read: true })),
                        }))
                    }
                >
                    ✔️ Marcar todas como lidas
                </button>
                {notifs.map((notif) => (
                    <div
                        key={notif.id}
                        className={`notification-item ${notif.read ? "read" : "unread"}`}
                    >
                        <p>{notif.message}</p>
                        <div className="notification-actions">
                            {notif.link && (
                                <button
                                    className="go-to-module"
                                    onClick={() => navigate(notif.link!)}
                                >
                                    ▶️ Ir para o módulo
                                </button>
                            )}
                            <button
                                className="mark-as-read"
                                onClick={() => {
                                    setNotifications((prev) => ({
                                        ...prev,
                                        [moduleType]: prev[moduleType].map(n =>
                                            n.id === notif.id ? { ...n, read: true } : n
                                        ),
                                    }));
                                }}
                            >
                                ✔️ Lida
                            </button>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    // -----------------------------
    // CARDS
    // -----------------------------
    const cards = [
        { img: documentosImg, title: "Documentos", desc: "Documentos utilizados no dia a dia dos plantões", path: "/registers" },
        { img: patrimoniosImg, title: "Patrimônios", desc: "Cadastro e visualização de informações de patrimônios públicos do município", path: "/tools/places" },
        { img: contactsImg, title: "Contatos", desc: "Agenda telefônica com os principais contatos utilizados", path: "/tools/contacts" },
        { img: relatoriosImg, title: "Relatórios", desc: "Criação de gráficos de estatística de ocorrências com base nos talões abertos", path: "/stats" },
        { img: veiculo2Img, title: "Veículos em Abandono", desc: "Cadastro das notificações de veículos em estado de abandono", path: "/tools/vehicles" },
        { img: comercioImg, title: "Estabelecimentos", desc: "Cadastro de informações sobre estabelecimentos comerciais da cidade", path: "/tools/commercial" },
        { img: notificacaoImg, title: "Notificações", desc: "Gerenciamento das notificações de postura aplicadas pelas equipes", path: "/tools/notification" },
        { img: autuacaoImg, title: "Autuações", desc: "Gerenciamento dos autos de infração aplicados pelas equipes", path: "/tools/infringement" },
        { img: equipeImg, title: "Gerenciamento da equipe", desc: "Informações e registros de dados dos agentes da Guarda Civil Municipal", path: "/tools/agents" },
    ];

    // -----------------------------
    // RENDER
    // -----------------------------
    return (
        <main className="main-content">
            <header className="topbar">
                <h2>Sistema GCM</h2>
                <div className="topbar-actions" ref={notificationsRef}>
                    {(["postura", "veiculos", "agentes", "estabelecimentos"] as ModuleType[]).map((module) => (
                        <div key={module} className="notification-container">
                            <button
                                className="icon-btn"
                                onClick={() =>
                                    setActiveDropdown(activeDropdown === module ? null : module)
                                }
                            >
                                {module === "postura" && <FontAwesomeIcon icon={faBell} />}
                                {module === "veiculos" && <FontAwesomeIcon icon={faCarCrash} />}
                                {module === "agentes" && <FontAwesomeIcon icon={faUserShield} />}
                                {module === "estabelecimentos" && <FontAwesomeIcon icon={faStore} />}
                                {notifications[module]?.filter(n => !n.read).length > 0 && (
                                    <span className="badge">
                                        {notifications[module].filter(n => !n.read).length}
                                    </span>
                                )}
                            </button>

                            {activeDropdown === module && (
                                <div className="notifications-dropdown active">
                                    <h4>
                                        {module === "postura" && "Notificações de Postura"}
                                        {module === "veiculos" && "Veículos em Abandono"}
                                        {module === "agentes" && "Notificações de Agentes"}
                                        {module === "estabelecimentos" && "Notificações de Estabelecimentos"}
                                    </h4>
                                    <div className="notification-list">
                                        {renderNotifications(module)}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <button id="themeToggle" className="icon-btn" onClick={handleToggleTheme}>
                        {isDarkTheme ? "☀️" : "🌓"}
                    </button>
                    <button className="icon-btn logout-btn" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                    </button>
                </div>
            </header>

            <section className="cards-grid">
                {cards.map((c, i) => (
                    <div key={i} className="card" onClick={() => navigate(c.path)}>
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
