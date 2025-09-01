import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { validateEmail } from "./utils/validations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboard/DashboardPage";
import DayShiftPage from "./pages/dashboard/registers/day_shift/DayShiftPage";
import NightShiftPage from "./pages/dashboard/registers/night_shift/NightShiftPage";
import ReportOfManagerPage from "./pages/dashboard/registers/manager_report/ManagerReportPage";
import PatrolReportPage from "./pages/dashboard/registers/patrol_report/PatrolReportPage";
import PatrolReportRomoPage from "./pages/dashboard/registers/patrol_report_romo/PatrolReportRomoPage";
import ReleaseTermPage from "./pages/dashboard/registers/release_term/ReleaseTermPage";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import TogglePanel from "./components/TogglePanel";

import "./Index.css";
import RegistersPage from "./pages/dashboard/registers/RegistersPage";

function App() {
  const [isActive, setIsActive] = useState(false);
  const { user, login, register, recoverPassword } = useAuth();

  // Funções de login, registro e recuperação
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
    return (
      <Router>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/registers" element={<RegistersPage />} />
              <Route path="/registers/day-shift" element={<DayShiftPage />} />
              <Route path="/registers/night-shift" element={<NightShiftPage />} />
              <Route path="/registers/report-of-manager" element={<ReportOfManagerPage />} />
              <Route path="/registers/patrol-report" element={<PatrolReportPage />} />
              <Route path="/registers/patrol-report-romo" element={<PatrolReportRomoPage />} />
              <Route path="/registers/release-term" element={<ReleaseTermPage />} />
              {/* outras páginas */}
            </>
          ) : (
            <Route path="*" element={
              <div className={`container ${isActive ? "active" : ""}`}>
                <LoginForm onSubmit={handleLoginSubmit} onRecoverPassword={handleRecoverPassword} />
                <RegisterForm onSubmit={handleRegisterSubmit} />
                <TogglePanel isActive={isActive} setIsActive={setIsActive} />
              </div>
            } />
          )}
        </Routes>
      </Router>
    );
  }

  // Tela de login/registro
  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <LoginForm onSubmit={handleLoginSubmit} onRecoverPassword={handleRecoverPassword} />
      <RegisterForm onSubmit={handleRegisterSubmit} />
      <TogglePanel isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default App;
