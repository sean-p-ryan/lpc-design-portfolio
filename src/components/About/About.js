import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="headshot"></div>
        <div className="about-description">
          <p>Lauren Peters-Collaer is a graphic designer in New York City. Before
          she rode the subway and thought about typography, she lived in greener
          places and did math.</p>
          <p className="reach-out">Please don't hesitate to reach out.</p>
        </div>
      </div>
    );
  }
}

export default About;
