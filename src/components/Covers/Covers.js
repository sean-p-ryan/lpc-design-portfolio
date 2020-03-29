import React from "react";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import { BrowserRouter as Route } from "react-router-dom";
import coverData from "../../data/book-previews";
import { Link } from "react-router-dom";
import coverPreviews from "../../data/book-previews";
import ProjectFeature from "../../components/ProjectFeature/ProjectFeature";

class Covers extends React.Component {
  render() {
    const data = coverData;
    return (
      <div className="wrapper" style={this.props.style}>
        {Object.keys(data).map((d, i) => {
          return (
            <Link key={i} to={`/cover/${d}`}>
              <ProjectPreview key={i} data={data[d]} key={i} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Covers;
