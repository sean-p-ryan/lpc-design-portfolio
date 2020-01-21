/* eslint-disable no-unused-expressions */

import React from "react";
import ProjectPreview from "./ProjectPreview.js";
import previewData from "./data/book-previews.js"

class ProjectPreviewContainer extends React.Component {    
  render() {    
    const data = previewData;    
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
