import React from "react";
import { NavLink, Switch } from "react-router-dom";
import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavHidden: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setInitialState()
    window.addEventListener("resize", this.setLargeWidthNav.bind(this));
    window.addEventListener("click", this.setLargeWidthNav.bind(this));    
  }

  setInitialState() {    
    if (window.innerWidth <= 640) {
      this.setState({mobileNavHidden: true})
    } else if (window.innerWidth > 640) {
      this.setState({mobileNavHidden: false})
    }
  }

  setLargeWidthNav(event) {    
    if (window.innerWidth >= 640) {
      this.setState({ mobileNavHidden: false })
    } else if (window.innerWidth < 640 && event.type == "resize")  {
      this.setState({ mobileNavHidden: true })
    }
  }

  handleClick() {    
    const currentState = (this.state.mobileNavHidden)
    this.setState({ mobileNavHidden: !currentState})  
  }

  render() {
    return (
      <div className="navbar-container">
        <div onClick={this.handleClick} className="mobile-nav-menu"><span id="menu">MENU</span></div>
        <div         
          className={
            (this.state.mobileNavHidden) ?
              "nav-item-container-hidden" : 
              "nav-item-container-visible" 
            }   
        >
          <NavLink
            onClick={this.handleClick}
            activeClassName="selected"
            className="nav-item"
            exact
            to="/about"
          >
            LPC
          </NavLink>
          <NavLink
            onClick={this.handleClick}
            activeClassName="selected"
            className="nav-item"          
            to={'/cover'}
          >
            COVERS
          </NavLink>
          <NavLink
            onClick={this.handleClick}
            activeClassName="selected"
            className="nav-item"            
            to="/work"
          >
            PRINT & IDENTITY
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
