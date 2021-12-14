import './Header.css';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Header() {
    return (
        <header className='headerFlex'>
            <Link className="navTitle" to="/">The Edenfield House</Link>
            <nav>
                <Link to="/About">About us</Link>
                <Link to="/Contact">Contact us</Link>
                <Link to="/Photos">Photos</Link>
            </nav>
        </header>
    )
}

export default Header;