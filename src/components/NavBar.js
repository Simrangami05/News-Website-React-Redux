import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-4">
          <Link className="navbar-brand" to="/general">
            Honest News Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item mx-4">
                <Link className="nav-link" aria-current="page" to="/general">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
