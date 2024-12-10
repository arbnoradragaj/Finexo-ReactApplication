import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header_section">
      <div className="topnav">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          Finexo
        </NavLink>

        {/* Hamburger menu icon */}
        <div className="icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <NavLink
            className="nav-link"
            to="/"
            activeClassName="active"
            exact
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="nav-link"
            to="/services"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            className="nav-link"
            to="/why"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Why Us
          </NavLink>
          <NavLink
            className="nav-link"
            to="/team"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Team
          </NavLink>
          <NavLink
            className="nav-link"
            to="/contact"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            className="nav-link"
            to="/login"
            activeClassName="active"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
