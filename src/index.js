import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import "./app.scss";
import About from "./components/About/About.js";
import Covers from "./components/Covers/Covers";
import PrintIdentity from "./components/PrintIdentity/PrintIdentity";
import ProjectFeature from "./components/ProjectFeature/ProjectFeature";
import coverData from "./data/book-previews";
import printIdentityData from "./data/print-identity-previews";
import { Spring } from "react-spring/renderprops";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coversDisplayValue: { display: "flex" },
    };
  }
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {(props) => (
          <BrowserRouter>
            <div style={props}>
              <Navbar />
              <Switch>
                <Route style={props} exact path="/about">
                  <About />
                </Route>
                <Route style={props} exact path={"/" || ""}>
                  <Covers style={this.state.coversDisplayValue} />
                </Route>
                <Route
                  style={props}
                  exact
                  path={"/" || ""}
                  component={() => (
                    <Covers style={this.state.coversDisplayValue} />
                  )}
                ></Route>
                <Route
                  path="/work/:id"
                  style={props}
                  component={(props) => (
                    <div>
                      <ProjectFeature {...props} data={printIdentityData} />
                      <PrintIdentity />
                    </div>
                  )}
                ></Route>
                <Route
                  style={props}
                  path="/work"
                  component={PrintIdentity}
                ></Route>
                <Route
                  path="/cover/:id"
                  style={props}
                  component={(props) => (
                    <div>
                      <ProjectFeature {...props} data={coverData} />
                      <Covers style={this.state.coversDisplayValue} />
                    </div>
                  )}
                ></Route>
                <Route
                  path="/cover"
                  style={props}
                  component={(props) => (
                    <div>
                      <Covers style={this.state.coversDisplayValue} />
                    </div>
                  )}
                ></Route>
              </Switch>
            </div>
          </BrowserRouter>
        )}
      </Spring>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
