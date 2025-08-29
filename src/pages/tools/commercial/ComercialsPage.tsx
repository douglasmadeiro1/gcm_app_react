import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-init'; // Supondo que você tem uma importação para o seu banco de dados
import './commercial.css'; // Importe o seu CSS
import TopBar from '../../components/TopBar'; // Componentes globais
import Sidebar from '../../components/Sidebar';
import SummaryCards from './components/SummaryCards';
import EstablishmentForm from './components/EstablishmentForm';
import EstablishmentCard from './components/EstablishmentCard';
import EstablishmentEditModal from './components/EstablishmentEditModal';
import ConfirmationModal from '../../components/ConfirmationModal'; // Componente genérico

const CommercialsPage = () => {
    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedEstablishment, setSelectedEstablishment] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchEstablishments = async () => {
            setIsLoading(true);
            const snapshot = await db.collection("estabelecimentos").orderBy("nomeEstabelecimento").get();
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setEstabelecimentos(data);
            setIsLoading(false);
        };

        fetchEstablishments();
    }, []);

    const handleEditEstablishment = (establishment) => {
        setSelectedEstablishment(establishment);
        setIsEditModalOpen(true);
    };

    return (
        <div className="container">
            <TopBar title="Estabelecimentos comerciais" />
            <Sidebar />
            <main className="main-content">
                <header>
                    <h1 id="titulo-secao">Dashboard</h1>
                </header>
                <section id="secao-conteudo">
                    <SummaryCards estabelecimentos={estabelecimentos} />
                    
                    <h2 style={{ marginTop: '40px' }}>Cadastrar Novo Estabelecimento</h2>
                    <EstablishmentForm onSave={() => {
                        // Recarrega os dados após salvar um novo estabelecimento
                        // AQUI VOCÊ PODE CHAMAR A FUNÇÃO QUE RECARREGA OS DADOS
                    }} />

                    {isLoading ? (
                        <p>Carregando estabelecimentos...</p>
                    ) : (
                        <div id="lista-estabelecimentos" className="widgets">
                            {estabelecimentos.map(estab => (
                                <EstablishmentCard 
                                    key={estab.id} 
                                    establishment={estab} 
                                    onEdit={handleEditEstablishment} 
                                />
                            ))}
                        </div>
                    )}

                </section>
            </main>
            
            {isEditModalOpen && (
                <EstablishmentEditModal 
                    establishment={selectedEstablishment} 
                    onClose={() => setIsEditModalOpen(false)} 
                    onSave={() => {
                        // Recarrega os dados após salvar a edição
                        // AQUI VOCÊ PODE CHAMAR A FUNÇÃO QUE RECARREGA OS DADOS
                        setIsEditModalOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default CommercialsPage;