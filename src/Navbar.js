import React from "react";
import "./styles/navbar.css"

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <ul>
            <li>LPC</li>
            <li>COVERS</li>
            <li>PRINT & IDENTITY</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
