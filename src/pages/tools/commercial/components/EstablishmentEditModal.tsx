import React from 'react';
import EstablishmentCard from './EstablishmentCard'; // Reutilizamos o card aqui

const EstablishmentListModal = ({ title, list, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                </div>
                <ul className="modal-list">
                    {list.length === 0 ? (
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Nenhum estabelecimento encontrado</p>
                    ) : (
                        list.map(estab => (
                            <li key={estab.id}>
                                <EstablishmentCard establishment={estab} onEdit={() => {
                                    // Adicione a lógica para abrir o modal de edição aqui
                                    // Esta parte é um pouco mais complexa porque você precisará
                                    // comunicar com o componente pai (CommercialsPage).
                                    // Por enquanto, vamos manter simples.
                                    alert(`Abrir edição para: ${estab.nomeEstabelecimento}`);
                                }} />
                            </li>
                        ))
                    )}
                </ul>
                <div className="modal-actions">
                    <button className="btn-cancel" onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    );
};

export default EstablishmentListModal;