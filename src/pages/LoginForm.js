import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import loginImg from "../assets/imgs/login.svg";
import UserContext from "../UserContext";

import useHttp from "../hooks/use-http";

const LoginForm = () => {
  const ctx = useContext(UserContext);

  const { token } = ctx.userData;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, sendRequest: sendLoginRequest } = useHttp();

  const loginFormHandler = async (e) => {
    e.preventDefault();

    await sendLoginRequest(
      {
        url: "/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          email: email,
          password: password,
        },
      },
      ctx.setUserData
    );
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
                  type="text"
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
      {token && <Navigate to="/dashboard" />}
    </form>
  );
};

export default LoginForm;
