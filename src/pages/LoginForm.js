import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

import loginImg from "../assets/imgs/login.svg";
import UserContext from "../UserContext";
import API from "../env";

const LoginForm = () => {
  const ctx = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [userData, setUserData] = useState();

  const loginFormHandler = async (e) => {
    e.preventDefault();

    const cookies = new Cookies();

    try {
      const resp = await fetch(`${API}/api/login`, {
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
      setIsValid(resp.ok);
      const data = await resp.json();
      ctx.setUserData(data);
      setUserData(data);
      await cookies.set("token", data.token, { path: "/" });

      if (!resp.ok) {
        document.querySelector("#email").classList.add("notValid");
        document.querySelector("#password").classList.add("notValid");
      }
    } catch (e) {
      setIsValid(!isValid);
    }
  };

  return (
    <form onSubmit={loginFormHandler}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={loginImg} alt="" className="absolute" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="lg:text-5xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a
                    href="src/pages/LoginForm#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isValid ? <Navigate to="/dashboard" /> : undefined}
    </form>
  );
};

export default LoginForm;
