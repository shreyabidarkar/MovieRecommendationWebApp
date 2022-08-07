import React from 'react';

//import corresponding scss file
import './Navbar.scss';

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    //defining onClick function to add a task
    createTask() {
        this.props.createHandler();

    }

    
    render() {
        return (
        <nav className="navigation">
            <h1 className="heading" >ToDo App
            </h1>
            
            <span className="create"></span>
        </nav>
            );
    }
}