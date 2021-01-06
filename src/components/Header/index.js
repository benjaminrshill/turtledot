import React from 'react';
import tuttledot from './tuttledot.svg';
import './header.css';

export default function Header(props) {
    return (
        <header>
            <img src={tuttledot} className='logo' alt='logo' />
        </header>
    );
}
