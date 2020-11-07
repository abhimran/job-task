import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Assignment</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link">Card</Link>
                </li>
                <li className="nav-item">
                <Link to="/todo" className="nav-link">ToDo</Link>
                </li>
                <li className="nav-item">
                <Link to="/csv" className="nav-link">CSV</Link>
                </li> 
                <li className="nav-item">
                <Link to="/graphQlUsers" className="nav-link">Bonus Task(graphql)</Link>
                </li> 
            </ul>
            </div>
        </div>
    </nav>
    );
};

export default Nav;