import React from "react";
import "./project-feature.scss";
import "./rockaway.scss";

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
    console.log('heres data' + data.title)
    return (
      <div className="feature-outer-wrapper">
        <div className="description">
          <div className="description-title">{data.title}</div>
          <div className="description-text" ref="descriptionText"></div>
        </div>
        <div className="images-wrapper">
          {data.feature.images.map((image, i) => {
            console.log(image)
            return (
              <div
                className={
                  image.path.length === 1
                    ? "single-feature-image-wrapper"
                    : "multi-feature-image-wrapper"
                }                
                key={i}  
                id={`${data.id}-wrapper-${i + 1}`}                              
              >
                {image.path.map((imagePath, k) => {
                  const background = require(`../../img/${imagePath}`);
                  return (
                    <div
                      className={
                        image.path.length === 1
                          ? "single-image-container"
                          : "multi-image-container"
                      }
                      key={i}
                      style={{backgroundImage: `url(${background})`}}
                      id={`${data.id}-wrapper-${i + 1}-image-${k + 1}`}
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
