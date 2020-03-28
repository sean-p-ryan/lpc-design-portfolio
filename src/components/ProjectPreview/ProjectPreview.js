import React from "react";
import "./project-preview.css";
import styled from 'styled-components'

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    const data = this.props.data;
    const backgroundImage = require(`../../img/${data.backgroundImage}`);        

    let projectPreviewStyle = {
      width: "33.33vw",
      height: "25vw",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };  
    
    const HoverText = styled.p`
    opacity: 0.0    
    width: 100%;
    height: 100%;
	:hover {
		opacity: 1.0;
	}
`

    return (
      <div 
        style={projectPreviewStyle}
        className="project-preview-box"
        >                
        <div className="overlay"> 
        <h4 className="project-title">{data.title}</h4>       
        </div>        
      </div>
    );
  }
}

export default ProjectPreview;
