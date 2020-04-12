import React from "react";
import { Spring } from "react-spring/renderprops";
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
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {(props) => (
          <div style={props} >
            <div style={projectPreviewStyle} className="project-preview-box">
              <div className="overlay">
                <div className="project-title">{data.title}</div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default ProjectPreview;
