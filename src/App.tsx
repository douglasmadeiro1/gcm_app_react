import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { validateEmail } from "./utils/validations";
import Dashboard from "./pages/dashboard/Dashboard";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import TogglePanel from "./components/TogglePanel";

import "./Index.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const { user, login, register, recoverPassword } = useAuth();

  const handleLoginSubmit = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (error) {
      console.log("Erro no login:", error);
    }
  };

  const handleRegisterSubmit = async (email: string, password: string) => {
    if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    try {
      await register(email, password);
    } catch (error) {
      console.log("Erro no registro:", error);
    }
  };

  const handleRecoverPassword = async (email: string) => {
    if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido para a recuperação de senha.");
      return;
    }
    await recoverPassword(email);
  };

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <LoginForm onSubmit={handleLoginSubmit} onRecoverPassword={handleRecoverPassword} />
      <RegisterForm onSubmit={handleRegisterSubmit} />
      <TogglePanel isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default App;
