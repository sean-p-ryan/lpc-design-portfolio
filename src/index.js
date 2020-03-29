import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import "./app.css";
import About from "./components/About/About.js";
import Covers from "./components/Covers/Covers";
import PrintIdentity from "./components/PrintIdentity/PrintIdentity";
import ProjectFeature from "./components/ProjectFeature/ProjectFeature";
import coverData from "./data/book-previews";
import printIdentityData from "./data/print-identity-previews";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coversDisplayValue: { display: "flex" }
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    if (
      window.location.pathname.includes("work") ||
      window.location.pathname.includes("about")
    ) {
      this.setState({ coversDisplayValue: { display: "none" } });
    } else {
      this.setState({ coversDisplayValue: { display: "flex" } });
    }
  }
  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <Router>
          <Navbar />
          <Route path="/about" render={() => <About />}></Route>
          <Route path="/work/:id" component={(props) => <ProjectFeature {...props} data={printIdentityData} />}></Route>
          <Route path="/work" component={PrintIdentity}></Route>
          <Route path="/cover/:id" component={(props) => <ProjectFeature {...props} data={coverData} />}></Route>
          <Route
            path="/"
            component={() => <Covers style={this.state.coversDisplayValue} />}
          ></Route>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
