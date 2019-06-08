import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Navbar = () => {
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/memorizer">Memorizer</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default Navbar;