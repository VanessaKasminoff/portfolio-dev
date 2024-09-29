import React from "react";

const Header = () => {
  return (
    <header className="header">
      <p className="logo">VANESSA KASMINOFF</p>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
