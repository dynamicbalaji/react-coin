import React from 'react';
import './Header.css';
import logo from './logo.png';

// Capital letters is the naming convention for React components
const Header = () => {
    return (<div className="Header">
        <img src={logo} alt="logo" className="Header-logo"/>
    </div>
    );
}

export default Header;