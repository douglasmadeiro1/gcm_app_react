import React, { useState } from "react";

interface RegisterFormProps {
    onSubmit: (email: string, password: string) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const password = (form.elements.namedItem("passwordRegister") as HTMLInputElement).value;
        onSubmit(email, password);
    };

    return (
        <div className="form-box register">
            <form onSubmit={handleSubmit}>
                <h1>Criar conta</h1>
                <div className="input-box">
                    <input
                        type="email"
                        name="emailRegister"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="bx bxs-user"></i>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        name="passwordRegister"
                        placeholder="Senha"
                        required
                    />
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <button type="submit" className="btn button">Criar conta</button>
            </form>
        </div>
    );
}
