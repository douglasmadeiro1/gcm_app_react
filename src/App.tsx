import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { validateEmail } from "./utils/validations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboard/DashboardPage";
import RegistersPage from "./pages/registers/RegistersPage";
import DayShiftPage from "./pages/registers/day_shift/DayShiftPage";
import NightShiftPage from "./pages/registers/night_shift/NightShiftPage";
import ReportOfManagerPage from "./pages/registers/manager_report/ManagerReportPage";
import PatrolReportPage from "./pages/registers/patrol_report/PatrolReportPage";
import PatrolReportRomoPage from "./pages/registers/patrol_report_romo/PatrolReportRomoPage";
import ReleaseTermPage from "./pages/registers/release_term/ReleaseTermPage";

// Importe as outras páginas de `stats` e `tools` aqui
import ContactsPage from "./pages/tools/contacts/ContactsPage";
import CommercialPage from "./pages/tools/commercial/ComercialPage";
import NotificationPage from "./pages/tools/notification/NotificationPage";
import InfringementPage from "./pages/tools/infringement/InfringementPage";
import PlacesPage from "./pages/tools/places/PlacesPage";
import StatsPage from "./pages/stats/StatsPage";
import VehiclesPage from "./pages/tools/vehicles/VehiclesPage";

// ... e as outras páginas de estatísticas

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
    return (
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/registers" element={<RegistersPage />} />
          <Route path="/registers/day-shift" element={<DayShiftPage />} />
          <Route path="/registers/night-shift" element={<NightShiftPage />} />
          <Route path="/registers/report-of-manager" element={<ReportOfManagerPage />} />
          <Route path="/registers/patrol-report" element={<PatrolReportPage />} />
          <Route path="/registers/patrol-report-romo" element={<PatrolReportRomoPage />} />
          <Route path="/registers/release-term" element={<ReleaseTermPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/tools/places" element={<PlacesPage />} />
          <Route path="/tools/contacts" element={<ContactsPage />} />
          <Route path="/tools/commercial" element={<CommercialPage />} />
          <Route path="/tools/notification" element={<NotificationPage />} />
          <Route path="/tools/infringement" element={<InfringementPage />} />
          <Route path="/tools/vehicles" element={<VehiclesPage />} />
        </Routes>
      </Router>
    );
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