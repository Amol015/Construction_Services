import React, { useState } from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackround = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackround);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        {/* <li>
          <a href="#">
            <b>Home</b>
          </a>
        </li>
        <li>
          <a href="#">AboutUs</a>
        </li>
        <li>
          <a href="#">ContactUs</a>
        </li> */}

        {/* <li>
          <a href="./login">
            <b>Service Provider signIn</b>
          </a>
        </li> */}

        <li>
          <a href="./sign-up">
            <b>Register As A Professional</b>
          </a>
        </li>
        <li>
          <a href="./login">
            <b>Login/Signup</b>
          </a>
        </li>
      </ul>
    </nav>
  );
}
