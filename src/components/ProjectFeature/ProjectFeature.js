import React from "react";

class ProjectFeature extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
      const data = this.props.data[this.props.match.params.id]
      console.log(data);
  return <div>{data.title}</div>;
  }
}

export default ProjectFeature;
