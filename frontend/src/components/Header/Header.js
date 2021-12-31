import './Header.css';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
    "&:hover": {
        color: "gold"
    }
}

function Header() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <div className='myNav'>
            <div style={{visibility: "hidden"}}>
                <i><FontAwesomeIcon icon={click ? faTimes : faBars}/></i>
            </div>     
            <div className='navItem'>
                <Link to="/" style={removeDec}id="title">
                    <h1>The Edenfield House</h1>
                </Link>
            </div>
            <div className='menu-icon' onClick={()=> handleClick()}>
                <i><FontAwesomeIcon icon={click ? faTimes : faBars}/></i>
            </div>
            <div className={click ? 'openMobile' : 'navOptions'} onClick={() => closeMobileMenu()}>
                <div className='navItem'>
                    <Link to="/About" style={removeDec} className='navColor'>
                        <h4>About Us</h4>
                    </Link>
                </div>
                <div className='navItem'>
                <Link to="/Photos" style={removeDec} className='navColor'>
                    <h4>Photos</h4>
                </Link>
                </div>
                <div className='navItem'>
                <Link to="/reservation" style={removeDec} className='navColor'>
                    <h4>Reservations</h4>
                </Link>
                </div>
                <div className='navItem'>
                <Link to="/Contact" style={removeDec} className='navColor'>
                    <h4>Contact Us</h4>
                </Link>
                </div>
            </div>
        </div>       
    )
}

export default Header;