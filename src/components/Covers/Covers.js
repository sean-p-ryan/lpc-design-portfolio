import React from "react";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import coverData from "../../data/book-previews";
import { Link } from "react-router-dom";
import "./covers.scss";

class Covers extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {    
    console.log('handle click')
    window.scrollTo(0, 0);    
  }
  render() {
    const data = coverData;
    return (
      <div className="wrapper" style={this.props.style}>
        {Object.keys(data).map((d, i) => {
          return (
            <div onClick={() => this.handleClick()}>
            <Link className="link" key={i} to={`/cover/${d}`}>
              <ProjectPreview key={i} data={data[d]} key={i} />
            </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Covers;
