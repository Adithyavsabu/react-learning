import React from "react";
import logo from "../../Assets/images/logo192.png";
import "../../Assets/css/nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="link-container">
        <ul className="navbar-links">
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
