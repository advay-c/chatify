import React from 'react';
import './navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-text'>
                <a className='navbar-element' href="#">Home</a>
                <a className='navbar-element' href="#">About</a>
                <a className='navbar-element' href="#">Community</a>
                <a className='navbar-element' href="#">Chat</a>
                <a className='navbar-element' href="#">Sign In</a>
                <a className='navbar-element' href="#">Sign Up</a>
            </ul>
        </nav>
    );
};

export default Navbar;
