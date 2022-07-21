import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import HomePage from "./pages/HomePage";
import PostsList from "./components/Posts/PostsList";
import Site404 from "./pages/Site404";
import Dashboard from "./pages/Dashboard";
import AddPost from "./components/Posts/AddPost";
import Layout from "./ui/Layout";
import PostsContainer from "./components/Posts/PostsContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Site404 />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route path="/dashboard/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
