import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const RegistersPage: React.FC = () => {
    return (
        <div className="registers-container">
            {/* Sidebar exclusiva de Registers */}
            <Sidebar />

            {/* Área principal onde as rotas internas serão renderizadas */}
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default RegistersPage;
