import React, { useEffect, useState } from "react";
import NavBar from "../global/navbar/NavBar";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [value, setValue] = useState(
    localStorage.getItem("auth") || ""
  );
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [responseJson, setresponseJson] = useState({headers:{
    client: ""
  }});
  const handleInputChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`/auth/sign_in`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        email: loginForm.email,
        password: loginForm.password,
      },
      body: JSON.stringify(loginForm),
    }).then((res) =>
      (res.headers.get("content-type").includes("json")
        ? res.json()
        : res.text()
      )
        .then((data) => ({
          headers: [...res.headers].reduce((acc, header) => {
            return { ...acc, [header[0]]: header[1] };
          }, {}),
          status: res.status,
          data: data,
        }))
        .then((headers, status, data) => setresponseJson(headers, status, data))
    );
  };
  let json = JSON.stringify({"client": responseJson.headers.client, "access-token": responseJson.headers["access-token"], "uid": responseJson.headers.uid,})
  useEffect(() => {
    localStorage.setItem('auth', json);
  }, [responseJson]);  
  return (
    <div>
      <NavBar/>
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
