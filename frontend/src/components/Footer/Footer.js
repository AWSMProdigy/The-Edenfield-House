import './Footer.css';

import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const headerLinkStyle = {
    textDecoration: "none",
    color: "gold",
    margin: "auto 20px"
};

function Footer() {
    return (
        <footer>
            <h4>Edenfield House, 426 West Church Street, Swainsboro, GA 30401</h4>
        </footer>
    )
}

export default Footer;