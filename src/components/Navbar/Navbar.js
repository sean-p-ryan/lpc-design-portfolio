import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">        
          <div className="nav-item-container">
            <Link to="/about">
              <div className="nav-item">LPC</div>
            </Link>
            <Link to="/">
              <div className="nav-item">COVERS</div>
            </Link>
            <Link to="/work">
              <div className="nav-item">PRINT & IDENTITY</div>
            </Link>
          </div>        
      </div>
    );
  }
}

export default Navbar;
