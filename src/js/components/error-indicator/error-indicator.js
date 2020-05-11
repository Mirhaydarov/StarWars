import React from 'react';

import errorIcon from './image/death-star-error-icon.webp';

import './error-indicator.scss';

function ErrorIndicator() {
    return (
        <section className='error-indicator'>
            <h2 className='error-indicator__title'>Error</h2>
            <img
                className='error-indicator__image'
                src={errorIcon}
                alt='Death star error'
            />
            <p className='error-indicator__desc'>
                something has gone terribly wrong
            </p>
            <p className='error-indicator__desc'>
                (but we already try to fix it)
            </p>
        </section>
    );
}

export default ErrorIndicator;
