import React, { useEffect, useState } from "react";
import NavBar from "../global/navbar/NavBar";
import { Redirect } from "react-router-dom";
const SignUp = (props) => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleInputChange = (event) => {
    setSignUpForm({
      ...signUpForm,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      await props.client.emailSignUp({
        email: signUpForm.email,
        password: signUpForm.password,
        passwordConfirmation: signUpForm.password_confirmation,
      });
    } catch (error) {
      console.error(error);
    }

  setShouldRedirect(true)}


  if (shouldRedirect) {
    return <Redirect to={`/`} />;
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
}

export default SignUp;
