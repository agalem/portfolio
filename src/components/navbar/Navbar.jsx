import React from "react";
import './navabar.css';

const Navbar = () => {
    return (
        <nav className='navbar_container'>
            <ul>
                <li>
                    <a href={'/'} className='link'>Projects </a>
                </li>
                <li>
                    <a href={'/'} className='link'>About Me</a>
                </li>
                <li>
                    <a href={'/'} className='link'>Contact</a>
                </li>
                <li>
                    <a href={'/'} className='lang'>🇵🇱</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;