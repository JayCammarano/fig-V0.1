import React, { useEffect, useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [value, setValue] = React.useState(
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
  useEffect(() => {
    localStorage.setItem('auth', {"client": responseJson.headers.client, "access-token": responseJson.headers["access-token"], "uid": responseJson.headers.uid,});
    console.log(value)
  }, [responseJson]);  
  return (
    <div>
      <div>
        <div>
          <h1 className="center">Sign in</h1>
        </div>

        <form className="center" onSubmit={handleLogin}>
          <label>
            <input
              placeholder="Username"
              className="center"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Password"
              className="center"
              name="password"
              type="password"
              id="password"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <input type="submit" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
