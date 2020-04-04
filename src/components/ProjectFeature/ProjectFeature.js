import React from "react";
import "./project-feature.scss";

class ProjectFeature extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = this.props.data[this.props.match.params.id];
    this.refs.descriptionText.innerHTML = data.feature.description;
  }

  render() {
    const data = this.props.data[this.props.match.params.id];
    return (
      <div className="feature-outer-wrapper">
        <div className="description">
          <div className="description-title">{data.title}</div>
          <div className="description-text" ref="descriptionText"></div>
        </div>
        <div className="images-wrapper">
          {data.feature.images.map((image, i) => {
            return (
              <div
                className={
                  image.path.length === 1
                    ? "single-feature-image-wrapper"
                    : "multi-feature-image-wrapper"
                }
                style={
                  image.style
                    ? {
                        height: `${image.style.height}`
                      }
                    : {}
                }
                key={i}
              >
                {image.path.map((imagePath, i) => {
                  const background = require(`../../img/${imagePath}`);
                  return (
                    <div
                      className={
                        image.path.length === 1
                          ? "single-image-container"
                          : "multi-image-container"
                      }
                      key={i}
                      style={
                        image.style
                          ? {
                              backgroundImage: `url('${background}')`,
                              height: `${image.style.height}`,
                              width: `${image.style.width}`
                            }
                          : {backgroundImage: `url('${background}')`}
                      }
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="nav-arrow-container">
          <div className="last"></div>
          <div className="home"></div>
          <div className="next"></div>
        </div>
      </div>
    );
  }
}

export default ProjectFeature;
