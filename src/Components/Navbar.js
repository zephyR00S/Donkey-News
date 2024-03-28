import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-light"
            to="/"
            style={{ fontFamily: "Merriweather, serif", fontStyle: "italic" }}
          >
            Doneky News
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/general"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">
                  BUSINESS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">
                  ENTERTAINMENT
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">
                  HEALTH
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">
                  TECHNOLOGY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
