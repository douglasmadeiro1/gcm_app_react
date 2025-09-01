import React, { useState, useEffect } from 'react';
import EstablishmentListModal from './EstablishmentListModal'; // Vamos criar este em seguida
import { getEstabelecimentoStatus } from '../utils/statusUtils'; // Cria este arquivo depois

const SummaryCards = ({ estabelecimentos }) => {
    const [resumo, setResumo] = useState({
        regular: [],
        proximoVenc: [],
        irregular: []
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');

    useEffect(() => {
        const calcularResumo = async () => {
            const resumoCalculado = {
                regular: [],
                proximoVenc: [],
                irregular: []
            };

            for (const est of estabelecimentos) {
                const status = await getEstabelecimentoStatus(est.id, est);
                resumoCalculado[status].push(est);
            }

            setResumo(resumoCalculado);
        };
        
        if (estabelecimentos.length > 0) {
            calcularResumo();
        }
    }, [estabelecimentos]); // O efeito roda sempre que a lista de estabelecimentos muda

    const handleCardClick = (status) => {
        setSelectedStatus(status);
        setIsModalOpen(true);
    };

    return (
        <div id="resumo-container" className="widgets">
            <div className="resumo-card regular" onClick={() => handleCardClick('regular')}>
                <h3>Regulares ({resumo.regular.length})</h3>
            </div>
            <div className="resumo-card prox-vencer" onClick={() => handleCardClick('proximoVenc')}>
                <h3>Próx. do Vencimento ({resumo.proximoVenc.length})</h3>
            </div>
            <div className="resumo-card irregular" onClick={() => handleCardClick('irregular')}>
                <h3>Irregulares ({resumo.irregular.length})</h3>
            </div>
            
            {isModalOpen && (
                <EstablishmentListModal
                    title={`Estabelecimentos ${selectedStatus}`}
                    list={resumo[selectedStatus]}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default SummaryCards;