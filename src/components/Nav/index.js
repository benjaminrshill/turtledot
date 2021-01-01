import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
    return (
        <nav>
            <Link to='/Items' className='menu-item'>
                <div className='menu-icon'>
                    +
                </div>
                <div className='menu-text'>
                    Items
                </div>
            </Link>
            <Link to='/Arrange' className='menu-item'>
                <div className='menu-icon'>
                    <span></span>
                </div>
                <div className='menu-text'>
                    Arrange
                </div>
            </Link>
            <Link to='/Week' className='menu-item'>
                <div className='menu-icon'>
                    <span className='done'></span>
                </div>
                <div className='menu-text'>
                    This week
                </div>
            </Link>
            <Link to='/History' className='menu-item'>
                <div className='menu-icon'>
                    &#8592;
                </div>
                <div className='menu-text'>
                    History
                </div>
            </Link>
        </nav>
    );
}
