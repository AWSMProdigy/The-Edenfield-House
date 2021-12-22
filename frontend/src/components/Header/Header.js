import './Header.css';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const styledLink = { 
    textDecoration: "none",
    margin: "0 5px 0 5px",
    padding: "0 5px 3px 5px",
    borderBottom: "2px solid var(--myCo)",
    color: "var(--myCo)",
    backgroundImage: "linear-gradient(180deg,var(--darkGrey) 0%,var(--darkGrey) 50%,var(--myCo) 50%,var(--myCo) 100%)",
    backgroundSize: "100% 200%",
    transition: "background-position .3s cubic-bezier(.47, .1, 1, .63), color .2s linear",
    transitionDelay: "0.0s, 0.15s",
    
    "&:hover": {
        color: "var(--darkGrey)",
        cursor: "pointer",
        backgroundPosition: "-100% 100%",
    }
};

const removeDec = {
    textDecoration: "none",
    color: "white",
    "&:hover": {
        color: "var(--darkGrey)"
    }
}

function Header() {
    return (
        <>
            <div className='title'>
                <Link to="/" style={removeDec}>
                    <h1>The Edenfield House</h1>
                </Link>
            </div>
            <div className='myNav'>
                <div className='navItem'>
                    <Link to="/About" style={removeDec}>
                        <h4>About Us</h4>
                    </Link>
                </div>
                <div className='navItem'>
                <Link to="/Photos" style={removeDec}>
                    <h4>Photos</h4>
                </Link>
                </div>
                <div className='navItem'>
                <Link to="/reservation" style={removeDec}>
                    <h4>Reservations</h4>
                </Link>
                </div>
                <div className='navItem'>
                <Link to="/Contact" style={removeDec}>
                    <h4>Contact Us</h4>
                </Link>
                </div>
            </div>
        </>
    )
}

export default Header;