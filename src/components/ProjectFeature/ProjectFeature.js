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
                  image.path.length > 1
                    ? {
                        height: `${image.height}`
                      }
                    : { height: "70vw"}
                }
                key={i}
              >
                {image.path.map((imagePath, i) => {
                  const background = require(`../../img/${imagePath}`);
                  console.log(image)
                  return (
                    <div
                      className={
                        image.path.length === 1
                          ? "single-image-container"
                          : "multi-image-container"
                      }
                      key={i}
                      style={
                        image.path.length === 1
                          ? { backgroundImage: `url('${background}')` }
                          : {
                              backgroundImage: `url('${background}')`,
                              width: `${image.width}`
                            }
                      }
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="arrows">ARROWS</div>
      </div>
    );
  }
}

export default ProjectFeature;
