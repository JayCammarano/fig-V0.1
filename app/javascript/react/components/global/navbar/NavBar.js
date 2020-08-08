import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SignInSignUp from "./SignInSignUp";
export const NavBar = () => {
  const [isActive, setisActive] = useState(false);
  const triggerActiveBurger = () => {
    if (isActive === false) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  };
  return (
    <div>
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
          <Link className="navbar-item is-dark" to="/">
                fig.
              </Link>
            <a
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={triggerActiveBurger}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">

              <Link className="navbar-item is-dark is-active" to="/artists">
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
