import React from "react";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import printIdentityData from "../../data/print-identity-previews";
import "./print-identity.scss";

class PrintIdentity extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(d) {
    window.location.href = "/work/" + d;
  }
  render() {
    const data = printIdentityData;
    return (
      <div className="wrapper">
        {Object.keys(data).map((d, i) => {
          return (
            <div key={i} onClick={() => this.handleClick(d)}>
              <ProjectPreview key={i} data={data[d]} key={i} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PrintIdentity;
