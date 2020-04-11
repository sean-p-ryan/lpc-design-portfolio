import React from "react";
import "./project-feature.scss";
import "./project-styles/rockaway.scss";
import "./project-styles/cma.scss";
import "./project-styles/sherif.scss";

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
      <div className={data.type}>
      <div id={`${data.id}-outer-wrapper`} className="feature-outer-wrapper">
        <div id={`${data.id}-description`} className="description">
          <div
            id={`${data.id}-description-title`}
            className="description-title"
          >
            {data.title}
          </div>
          <div
            id={`${data.id}-description-text`}
            className="description-text"
            ref="descriptionText"
          ></div>
        </div>
        <div id={`${data.id}-images-wrapper`} className="images-wrapper">
          {data.feature.images.map((imageSet, i) => {
            return (
              <div
                dataType={`${data.type}`}
                id={
                  imageSet.length === 1
                    ? `${data.id}-single-feature-image-wrapper-${i + 1}`
                    : `${data.id}-multi-feature-image-wrapper-${i + 1}`
                }
                className={
                  imageSet.length === 1
                    ? "single-feature-image-wrapper"
                    : "multi-feature-image-wrapper"
                }
                key={i}
              >
                {imageSet.map((imagePath, k) => {
                  const background = require(`../../img/${imagePath}`);
                  return (
                    <div
                      type={data.type}
                      className={
                        imageSet.length === 1
                          ? "single-image-container"
                          : "multi-image-container"
                      }
                      key={i}
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default ProjectFeature;
