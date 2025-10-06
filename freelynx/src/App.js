import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import ClientReg from "./pages/ClientReg";
import FreelancerReg from "./pages/FreelancerReg";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";

// A dropdown menu component in the top-left corner
const PageSwitcher = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 1000 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#14532d",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Switch Page ▾
      </button>

      {open && (
        <div
          style={{
            marginTop: "0.5rem",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            onClick={() => {
              navigate("/client");
              setOpen(false);
            }}
            style={dropdownItem}
          >
            Client Registration
          </div>
          <div
            onClick={() => {
              navigate("/freelancer");
              setOpen(false);
            }}
            style={dropdownItem}
          >
            Freelancer Registration
          </div>
          <div
            onClick={() => {
              navigate("/client-dashboard");
              setOpen(false);
            }}
            style={dropdownItem}
          >
            Client Dashboard
          </div>
          <div
            onClick={() => {
              navigate("/freelancer-dashboard");
              setOpen(false);
            }}
            style={dropdownItem}
          >
            Freelancer Dashboard
          </div>
        </div>
      )}
    </div>
  );
};

const dropdownItem = {
  padding: "0.75rem 1rem",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
  fontSize: "0.95rem",
};

function App() {
  return (
    <Router>
      {/* Dropdown always visible on top-left */}
      <PageSwitcher />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ClientReg />} />
        <Route path="/client" element={<ClientReg />} />
        <Route path="/freelancer" element={<FreelancerReg />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;