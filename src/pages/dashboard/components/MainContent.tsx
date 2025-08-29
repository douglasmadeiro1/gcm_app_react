import React from 'react';
import ThemeToggle from './ThemeToggle';

const MainContent: React.FC = () => {
    return (
        <main className="main-content">
            <ThemeToggle />
            <section>
                <img src="./assets/image/background-gcm.jpg" className="background-gcm" alt="Imagem GCM" />
            </section>
            <h1>Bem-vindo ao Dashboard!</h1>
        </main>
    );
};

export default MainContent;
