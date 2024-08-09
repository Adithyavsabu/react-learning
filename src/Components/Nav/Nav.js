import react from "react";

import logo from "../../Assets/images/logo192.png";
import "../../Assets/css/nav.css";

function Nav() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <div>
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
    </div>
  );
}

export default Nav;
