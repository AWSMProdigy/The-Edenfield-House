import './Header.css';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const headerLinkStyle = {
    textDecoration: "none",
    color: "gold",
    margin: "auto 20px"
};

function Header() {
    return (
        <header>
            <Link to="/" style={headerLinkStyle}>
                <h1>The Edenfield House</h1>
            </Link>
            <nav>
                <Link to="/About" style={headerLinkStyle}>
                    <h4>About Us</h4>
                </Link>
                <Link to="/Photos" style={headerLinkStyle}>
                    <h4>Photos</h4>
                </Link>
                <Link to="/Contact" style={headerLinkStyle}>
                    <h4>Contact Us</h4>
                </Link>
            </nav>
        </header>
    )
}

export default Header;