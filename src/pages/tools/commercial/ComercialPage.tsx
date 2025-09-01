// src/pages/dashboard/registers/RegistersPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const RegistersPage: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Documentos</h2>
            <p>Escolha qual documento deseja acessar:</p>
            <ul>
                <li><Link to="day-shift">Relatório do Dia</Link></li>
                <li><Link to="night-shift">Relatório da Noite</Link></li>
                <li><Link to="report-of-manager">Relatório do Gestor</Link></li>
                <li><Link to="patrol-report">Relatório de Patrulha</Link></li>
                <li><Link to="patrol-report-romo">Relatório Patrulha ROMO</Link></li>
                <li><Link to="release-term">Termo de Liberação</Link></li>
            </ul>
        </div>
    );
};

export default RegistersPage;
