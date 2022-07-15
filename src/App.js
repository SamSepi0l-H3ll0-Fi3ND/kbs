import React, { useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm";

function App() {
  const [email, setEmail] = useState("test@tes.com");
  const [password, setPassword] = useState("Has@12123321123");
  const [userData, setUserData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://192.168.0.125:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await resp.json();
    setUserData(data);
    console.log(data);
  };

  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
