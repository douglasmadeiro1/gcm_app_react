// src/pages/commercial/components/EstablishmentCard.tsx
import React from 'react';
import { getIcon } from './utils'; // Vamos criar um arquivo de utils depois

const EstablishmentCard = ({ establishment, onEdit }) => {
    // A lógica de getEstabelecimentoStatus e outros utilitários pode ser movida para cá
    // ou para um arquivo de utils separado.
    
    // Supondo que `establishment` já tem o status calculado
    const status = establishment.status || 'regular';

    return (
        <div className={`card card-${status}`} onClick={() => onEdit(establishment)}>
            <h3>{establishment.nomeEstabelecimento}</h3>
            <p>Endereço: {establishment.enderecoEstabelecimento}</p>
            <p>Telefone: {establishment.telefone}</p>
            <p>Validade do Alvará: {establishment.validadeAlvara}</p>
            <div className="pendencias-icons">
                {/* Ícones renderizados aqui */}
            </div>
        </div>
    );
};

export default EstablishmentCard;