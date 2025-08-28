import React from "react";

interface TogglePanelProps {
    isActive: boolean;
    setIsActive: (active: boolean) => void;
}

export default function TogglePanel({ isActive, setIsActive }: TogglePanelProps) {
    return (
        <div className="toggle-box">
            <div className="toggle-panel toggle-left">
                <h1>Bem vindo de volta!</h1>
                <p>Não possui uma conta?</p>
                <div className="create-account-btn">
                    <button className="btn register-btn" onClick={() => setIsActive(true)}>
                        Criar conta
                    </button>
                </div>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Olá, seja bem vindo!</h1>
                <p>Já possui uma conta?</p>
                <div className="create-account-btn">
                    <button className="btn login-btn" onClick={() => setIsActive(false)}>
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );
}
