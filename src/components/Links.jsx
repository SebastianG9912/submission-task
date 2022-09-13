import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Register">Register for interest</Link>
            <Link to="/Newsfeed">See the newsfeed</Link>  
        </nav>
    );
}

export default Links;
