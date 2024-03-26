import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
              {props.item1}
              </Link>
            </li>{" "}
            <li className="nav-item">
            <Link className="nav-link active" to="/About">
              {props.item2}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.modename}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.modename} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  item1: PropTypes.string,
  item2: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title",
  item1: "item1",
  item2: "item2",
};
