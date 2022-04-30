import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { HOME, MOVIES, TVSHOWS, WEBSERIES } from "../constants";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-transparent navbar-light overlap">
        <NavLink className="navbar-brand" to={HOME}>
          MECO
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to={MOVIES}>
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={TVSHOWS}>
                TV-Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={WEBSERIES}>
                Web-Series
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
