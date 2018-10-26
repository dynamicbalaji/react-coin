import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

// Capital letters is the naming convention for React components
const Header = () => {
    return (<div className="Header">
        <Link to="/">
            <img src={logo} alt="logo" className="Header-logo"/>
        </Link>
    </div>
    );
}

export default Header;