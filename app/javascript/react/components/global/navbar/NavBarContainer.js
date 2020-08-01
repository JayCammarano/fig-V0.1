import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export const NavBar = () => {
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

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item is-dark"to="/artists">
              artists
              </Link>
              <Link className="navbar-item is-dark" to="/labels">
                labels
              </Link>
              <Link className="navbar-item is-dark" to="/tags">
                tags
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <div className="buttons"></div>
            <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
