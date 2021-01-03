import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <NavLink to='/Items' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    +
                </div>
                <div className='menu-text'>
                    Items
                </div>
            </NavLink>
            <NavLink to='/Arrange' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    <span></span>
                </div>
                <div className='menu-text'>
                    Arrange
                </div>
            </NavLink>
            <NavLink to='/Week' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    <span className='done'></span>
                </div>
                <div className='menu-text'>
                    This week
                </div>
            </NavLink>
            <NavLink to='/History' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    &#8592;
                </div>
                <div className='menu-text'>
                    History
                </div>
            </NavLink>
        </nav>
    );
}