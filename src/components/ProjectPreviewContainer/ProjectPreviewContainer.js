import React from "react";
import ProjectPreview from "../ProjectPreview/ProjectPreview.js";

class ProjectPreviewContainer extends React.Component {    
  render() {       
    const data = this.props.previewData;    
    console.log(this.props.test)
    let styles = {
        display: "flex",
        flexWrap: "wrap"
    }

    return (
      <div style={styles}>
          {Object.keys(data).map((d, i) => {                                      
            return <ProjectPreview 
                data={data[d]}
                key={i}
            />
        })}
      </div>
    );
  }
}

export default ProjectPreviewContainer;
