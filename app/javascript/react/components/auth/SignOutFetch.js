import React from "react";
import { Redirect } from "react-router-dom";
const SignOutFetch = () => {

  const onSignOut = () => {
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar-item" onClick={onSignOut}>
      sign out
    </div>
  );
};

export default SignOutFetch;
