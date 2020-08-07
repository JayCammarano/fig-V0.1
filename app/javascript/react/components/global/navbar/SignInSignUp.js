import React from "react";
import { Link } from "react-router-dom";
const SignInSignUp = () => {
  return (
    <div className="navbar-item is-dark">
      <Link className="button m-r-sm" to="/signup">Sign Up</Link>
      <Link className="button is-secondary" to="/login">
        Sign In
      </Link>
    </div>
  );
};

export default SignInSignUp;
