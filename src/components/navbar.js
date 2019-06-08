import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from "./index.js";
import Memorizer from "./memorizer.js";
import About from "./about.js";

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

            <Route path="/" exact component={Index} />
            <Route path="/memorizer" component={Memorizer} />
            <Route path="/about" component={About} />
        </Router>
    );
};

export default Navbar;