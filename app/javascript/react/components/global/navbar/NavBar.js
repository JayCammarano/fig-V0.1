import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SignInSignUp from "./SignInSignUp"
export const NavBar = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <div>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item is-dark" to="/">
            fig.
          </Link>
            <Link className="navbar-item is-dark" to="/artists">
              artists
            </Link>
            <Link className="navbar-item is-dark" to="/labels">
              labels
            </Link>
            <Link className="navbar-item is-dark" to="/tags">
              tags
            </Link>
            <SignInSignUp />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
