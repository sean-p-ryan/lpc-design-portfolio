import React from "react";
import "./project-feature.css"

class ProjectFeature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data[this.props.match.params.id];    

    return (
      <div className="feature-outer-wrapper">
        <div className="description">
          <div>{data.title}</div>
          <div>{data.feature.description}</div>
        </div>
        <div className="feature-images">
            {data.feature.images.map((image, i) => {
                const background = require(`../../img/${image}`);
                return (
                    <div className="feature-image" style={{backgroundImage: `url('${background}')`}}></div>
                )
            })}
        </div>
        </div>
    );
  }
}

export default ProjectFeature;
