import React, { useEffect, useState } from "react";
import NavBar from "../global/navbar/NavBar";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  
  async function handleLogin() {
    try {
      await props.client.emailSignIn({
        email: loginForm.email,
        password: loginForm.password
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleInputChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

if(props.isLoggedIn){
  <Redirect to='/artists'/>
}

  return (
    <div>
      <NavBar client={props.client} />
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
