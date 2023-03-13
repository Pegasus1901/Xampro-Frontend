import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './header.css'
import Logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <ul className='nav-ul'>
                    <li className='logo'><img src={Logo} alt="" /></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/login">Sign In/Up</NavLink></li>
            </ul>
        </div>
    )
}

export default Header