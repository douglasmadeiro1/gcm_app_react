// src/pages/dashboard/Dashboard.tsx
import React from 'react';
import './Dashboard.css';
// Remova o AuthGuard daqui
// import { AuthGuard } from '../../AuthGuard'; 
import { useAuth } from '../../hooks/useAuth';

const Dashboard: React.FC = () => {
    const { signOut } = useAuth();

    const handleLogout = () => {
        signOut();
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div>
                    <h2 style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 600 }}> Sistema GCM</h2>
                    <nav>
                        <a href="#"> Veículos em estado de abandono</a>
                        <a href="#"> 🏪 Estabelecimentos comerciais</a>
                        <a href="#"> Notificações de postura</a>
                        <a href="#"> Autuações de postura</a>
                        <a href="#"> 📊 Relatórios</a>
                        <a href="#"> 📄 Documentos</a>
                        <a href="#"> Patrimônios</a>
                        <a href="#"> Contatos</a>
                    </nav>
                </div>
                <div>
                    <a href="#" onClick={handleLogout} style={{ color: '#f87171' }}>Sair</a>
                </div>
            </aside>

            <main className="main-content">
                <div className="theme-toggle">
                    <label id="toggle-theme">
                        <i className="fas fa-moon"></i>
                    </label>
                </div>
                <section>
                    <img src="assets/image/background-gcm.jpg" className="background-gcm" alt="Imagem GCM" />
                </section>
                <h1>Bem-vindo ao Dashboard!</h1>
            </main>
        </div>
    );
};

export default Dashboard;