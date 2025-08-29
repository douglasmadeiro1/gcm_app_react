import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

const Sidebar: React.FC = () => {
    const { signOut } = useAuth();

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
                    <a href="#">📄 Documentos</a>
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
