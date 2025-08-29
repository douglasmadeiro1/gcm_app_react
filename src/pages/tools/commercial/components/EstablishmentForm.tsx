// src/pages/commercial/components/EstablishmentForm.tsx
import React, { useState } from 'react';
import { db } from '../../../firebase-init';

const EstablishmentForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        nomeEstabelecimento: '',
        enderecoEstabelecimento: '',
        // ... outros campos
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("estabelecimentos").add({
                ...formData,
                criadoEm: new Date()
            });
            setFormData({ // Limpa o formulário
                nomeEstabelecimento: '',
                enderecoEstabelecimento: '',
                // ...
            });
            onSave(); // Chama a função do componente pai para recarregar os dados
        } catch (error) {
            console.error("Erro ao salvar estabelecimento:", error);
            // Mostrar mensagem de erro
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
            <h3>Adicionar estabelecimento</h3>
            <input 
                type="text" 
                id="nome-estabelecimento" 
                placeholder="Nome do estabelecimento" 
                required 
                value={formData.nomeEstabelecimento}
                onChange={handleChange}
            />
            {/* ... outros inputs com value e onChange */}
            <button type="submit" className="btn-green">Salvar Estabelecimento</button>
        </form>
    );
};

export default EstablishmentForm;