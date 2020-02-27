import React from "react";
import PropTypes from "prop-types";

const NavBar = ({icon, title})=>{
    return(
        <nav className="navbar bg-primary">
        <h1>
            <i className={icon} /> {title}
        </h1>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
        </ul>
        </nav>
    );
};

NavBar.defaultProps = {
    title: "Github App",
    icon: "fab fa-github"
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default NavBar;