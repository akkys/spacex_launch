import React from "react";
import logo from "../logo.png";

const LaunchHeader = () => {
  return (
    <div className="container" id="img-container">
      <img
        src={logo}
        alt="logo"
        style={{ width: "500", display: "block", margin: "auto" }}
      />
    </div>
  );
};

export default LaunchHeader;
