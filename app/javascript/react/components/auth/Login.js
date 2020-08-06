import React, { useEffect, useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [response, setResponse] = useState({});
  const handleInputChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleLogin = (e) => {
    e.prevent.default();
    fetch(`/auth/sign-in`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        email: loginForm.email,
        password: loginForm.password,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        for (var pair of response.headers.entries()) {
          // accessing the entries
          if (pair[0] === "") {
            // key I'm looking for in this instance
            setResponse({
              total: pair[1], // saving that value where I can use it
            });
          }
        }
        return response.json();
      })
      .then((body) => {
        console.log(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };
  // if (shouldRedirect) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <div >
        <div>
          <h1 className="center">Sign in</h1>

        </div>

        <form className="center" onSubmit={this.handleLogin}>
          <label>
          <input placeholder="Username" className="center" name="email" id="email" onChange={handleInputChange} />
          </label>
          <br />
          <label>
          <input placeholder="Password" className="center"
            name="password"
            type="password"
            id="password"

            onChange={handleInputChange}
          /></label>
          <br />
          <input type="submit" onSubmit={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
