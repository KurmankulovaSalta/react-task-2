import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://автолого.рф/wp-content/uploads/mercedes-benz-logo.png"
        alt="Logo"
      />
      <h2>Navbar</h2>
      <ul className="ul">
        <li className="li">Header</li>
        <li className="li">Section</li>
        <li className="li">Footer</li>
      </ul>
    </div>
  );
};

export default Header;
