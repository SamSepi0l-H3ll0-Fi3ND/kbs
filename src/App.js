import React, { useContext } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import HomePage from "./pages/HomePage";

import Site404 from "./pages/Site404";

import Dashboard from "./pages/Dashboard";
import UserContext from "./UserContext";

function App() {
  const ctx = useContext(UserContext);
  const { theme } = ctx;

  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="*" element={<Site404 />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
