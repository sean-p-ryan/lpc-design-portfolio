import React from "react";
import "./project-preview.scss";

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const backgroundImage = require(`../../img/${data.backgroundImage}`);

    let projectPreviewStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };

    return (
      <div>
        <div style={projectPreviewStyle} className="project-preview-box">
          <div className="overlay">
            <div className="project-title">{data.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPreview;
