import React, { useState } from "react";
import loginImg from "../assets/imgs/login.svg";
import Valid from "../Validation";
import API from "../env";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: false,
    lastname: false,
    name: false,
    email: false,
    passw: 1,
  });

  const registerFormHandler = async (e) => {
    e.preventDefault();
    if (
      userInfo.username &&
      userInfo.name &&
      userInfo.lastname &&
      userInfo.email &&
      userInfo.passw > 1
    ) {
      try {
        const resp = await fetch(`${API}/api/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username,
            name: name + " " + lastName,
            email,
            password,
          }),
        });

        const data = await resp.json();

        console.log(data);
      } catch (e) {}
    }
  };

  return (
    <form onSubmit={registerFormHandler}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={loginImg} alt="" className="absolute" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
            <div className="card-body">
              <h1 className="lg:text-5xl font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUserInfo({ ...userInfo, username: Valid(e) });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setUserInfo({ ...userInfo, name: Valid(e) });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="last name"
                  className="input input-bordered"
                  onChange={(e) => {
                    setName(e.target.value);
                    setUserInfo({ ...userInfo, lastname: Valid(e) });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setUserInfo({ ...userInfo, email: Valid(e) });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setUserInfo({ ...userInfo, passw: Valid(e) });
                  }}
                />
                <i onClick={() => setShowPassword(!showPassword)}>Show</i>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
