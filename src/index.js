import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from "./Navbar.js"
import ProjectPreviewContainer from "./ProjectPreviewContainer";
import "./styles/app.css"

class App extends React.Component {
    render(){
        return (
            <div>
            <Navbar />
            <ProjectPreviewContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));