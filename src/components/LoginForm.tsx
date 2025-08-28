import React, { useState } from "react";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
    onRecoverPassword: (email: string) => void;
}

export default function LoginForm({ onSubmit, onRecoverPassword }: LoginFormProps) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const password = (form.elements.namedItem("passwordLogin") as HTMLInputElement).value;
        onSubmit(email, password);
    };

    return (
        <div className="form-box login">
            <form onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                <div className="input-box">
                    <input
                        type="email"
                        name="emailLogin"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="bx bxs-user"></i>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        name="passwordLogin"
                        placeholder="Senha"
                        required
                    />
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="forgot-link" onClick={() => onRecoverPassword(email)}>
                    <a href="#">Recuperar senha</a>
                </div>
                <button type="submit" className="btn button">Entrar</button>
            </form>
        </div>
    );
}
