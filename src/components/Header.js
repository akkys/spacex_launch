import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="container" id="img-container">
      <img
        src={logo}
        alt="logo"
        style={{ width: "500", display: "block", margin: "auto" }}
      />
      <h2>Launches</h2>
      <div className="my-3">
        <p>
          <span className="px-3 mr-2 bg-success" /> - Success
        </p>
        <p>
          <span className="px-3 mr-2 bg-danger" /> - Fail
        </p>
      </div>
    </div>
  );
};

export default Header;
