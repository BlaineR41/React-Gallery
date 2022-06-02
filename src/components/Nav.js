import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to="/arizona">Arizona</NavLink></li>
                    <li><NavLink to="/utah">Utah</NavLink></li>
                    <li><NavLink to="/pnw">PNW</NavLink></li>
                </ul>
            </nav>
    )
}

export default Nav