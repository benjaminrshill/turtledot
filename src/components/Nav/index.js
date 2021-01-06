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
            <NavLink to='/Doit' className='menu-item' activeClassName='here'>
                <div className='menu-icon'>
                    <span className='done'></span>
                </div>
                <div className='menu-text'>
                    Doit!
                </div>
            </NavLink>
            <NavLink to='/Clear' className='menu-item' activeClassName='here'>
                <div className='menu-icon delete'>
                    +
                </div>
                <div className='menu-text'>
                    Clear
                </div>
            </NavLink>
        </nav>
    );
}