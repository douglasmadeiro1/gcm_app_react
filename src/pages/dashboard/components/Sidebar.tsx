import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const { signOut } = useAuth();
    const [isDocsOpen, setIsDocsOpen] = useState(false);

    return (
        <aside className="sidebar">
            <div>
                <h2 style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 600 }}>Sistema GCM</h2>
                <nav>
                    <a href="#">Veículos em estado de abandono</a>
                    <a href="#">🏪 Estabelecimentos comerciais</a>
                    <a href="#">Notificações de postura</a>
                    <a href="#">Autuações de postura</a>
                    <a href="#">📊 Relatórios</a>

                    <div>
                        <h3
                            style={{ cursor: 'pointer', margin: '10px 0' }}
                            onClick={() => setIsDocsOpen(!isDocsOpen)}
                        >
                            📄 Documentos {isDocsOpen ? '▾' : '▸'}
                        </h3>
                        {isDocsOpen && (
                            <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
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
                        )}
                    </div>

                    <a href="#">Patrimônios</a>
                    <a href="#">Contatos</a>
                </nav>
            </div>
            <div>
                <a href="#" onClick={signOut} style={{ color: '#f87171' }}>Sair</a>
            </div>
        </aside>
    );
};

export default Sidebar;
