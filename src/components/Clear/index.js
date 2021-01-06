import React from 'react';
import './clear.css';

export default function Clear(props) {

    return (
        <main>
            <section className='clear'>
                <button
                    className='clear-button'
                    onClick={props.onClearItems}>
                    clear items
                </button>
                <button
                    className='clear-button'
                    onClick={props.onClearWeeks}>
                    clear weeks
                </button>
                <button
                    className='clear-button'
                    onClick={props.onClearAll}>
                    clear all
                </button>
            </section>
        </main>
    );
}
