import React, { useEffect, useState } from "react";
import NavBar from "../global/navbar/NavBar";
import { Redirect } from "react-router-dom";
import axios from "axios";
axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Login = () => {
  
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const apiUrl = "http://localhost:3000";
  const handleLogin = () => {};
  const handleInputChange = () => {};

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <h1 className="center title m-t-md m-b-md">Sign In</h1>
        </div>

        <form className="center m-l-md" onSubmit={handleLogin}>
          <div>
            <label>
              <input
                placeholder="Email"
                className="input center"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              <input
                placeholder="Password"
                className="input center"
                name="password"
                type="password"
                id="password"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <br />
          <input type="submit" className="button" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
