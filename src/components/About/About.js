import React from "react";
import { Spring } from "react-spring/renderprops";
import "./about.scss";

class About extends React.Component {
  render() {
    return (
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {(props) => (
      <div style={props} className="about-wrapper">
        <div className="headshot"></div>
        <div className="about-description">
          <p>Lauren Peters-Collaer is a graphic designer in New York City. Before
          she rode the subway and thought about typography, she lived in <a target="_blank"  href="https://instagram.com/p/3HvZ_rRCG4/?taken-by=laurenapc">greener
          places</a> and <a target="_blank" href="http://lithub.com/what-happens-when-a-math-major-becomes-a-book-designer/">did math.</a></p>
          <p className="reach-out">Please don't hesitate to reach out: <a href="mailto:laurenapc@gmail.com">laurenapc@gmail.com</a></p>
        </div>
      </div>
    )}
    </Spring>
    )
  }
}

export default About;
