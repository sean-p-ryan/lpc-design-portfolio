import React from "react";
import "./project-feature.scss";
import "./project-styles/rockaway.scss";
import "./project-styles/cma.scss";

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
        <div id={`${data.id}-images-wrapper`}    className="images-wrapper">
          {data.feature.images.map((imageSet, i) => {     
            console.log(imageSet)       
            return (              
              <div
                className={
                  imageSet.length === 1
                    ? "single-feature-image-wrapper"
                    : "multi-feature-image-wrapper"
                }                
                key={i}  
                id={`${data.id}-wrapper-${i + 1}`}                              
              >
                {imageSet.map((imagePath, k) => {
                  const background = require(`../../img/${imagePath}`);
                  return (
                    <div
                      className={
                        imageSet.length === 1
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
