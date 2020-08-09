import React, { useEffect, useState } from "react";
import NavBar from "../global/navbar/NavBar";
import { Redirect } from "react-router-dom";
const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [value, setValue] = useState(localStorage.getItem("auth") || "");
  const [responseJson, setresponseJson] = useState({
    headers: {
      client: "",
    },
  });
  const handleInputChange = (event) => {
    setSignUpForm({
      ...signUpForm,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    fetch(`/auth/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        email: signUpForm.email,
        password: signUpForm.password,
        password_confirmation: signUpForm.password_confirmation,
      },
      body: JSON.stringify(signUpForm),
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
        .then(setShouldRedirect(true))
    );
  };
  useEffect(() => {
    localStorage.setItem("auth", {
      client: responseJson.headers.client,
      "access-token": responseJson.headers["access-token"],
      uid: responseJson.headers.uid,
    });
    console.log(value.client);
  }, [responseJson]);

  if (shouldRedirect) {
    return <Redirect to={`/login`} />;
  }
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <h1 className="center title m-t-md m-b-md">Sign Up</h1>
        </div>

        <form className="m-l-md m-r-md center" onSubmit={handleSignUp}>
          <div>
            <label>
              <input
                placeholder="email"
                className="input center"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <br />
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
          <label>
            <input
              placeholder="Password Confirmation"
              className="input center"
              name="password_confirmation"
              type="password"
              id="password_confirmation"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <input
            type="submit"
            className="button m-l-md"
            onClick={handleSignUp}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
