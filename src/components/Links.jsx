import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <header style={{paddingLeft:"30px"}}>
            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/Register">Register email</Link>
                <Link to="/Newsfeed">Newsfeed</Link>  
            </nav>
        </header>
    );
}

export default Links;
