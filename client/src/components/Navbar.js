import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../images/PG.webp";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item ">
            <NavLink
              className="nav-link navhover active"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/About"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/Googles"
            >
              Google
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/Twitter"
            >
              Twitter
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="logout"
            >
              LogOut
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink
              className="nav-link navhover active"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/About"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="/Login"
            >
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link navhover "
              aria-current="page"
              to="SignUp"
            >
              Registration
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white nav">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="umesh" className="logo" />
            <span className="logon">Programing</span>
            <span className="logon1">Gyan</span>
          </NavLink>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  ">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
