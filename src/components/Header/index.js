import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <header>
            <img src='logo.svg' className='logo' alt='logo' />
            <h1>
                Items
            </h1>
        </header>
    );
}
