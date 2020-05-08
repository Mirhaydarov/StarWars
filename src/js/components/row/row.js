import React from 'react';
import PropTypes from 'prop-types';

import './row.scss';

const propTypes = {
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
};

function Row({ left, right }) {
    return (
        <div className='wrap'>
            <section className='row-wrap'>
                <article>{left}</article>
                <article>{right}</article>
            </section>
        </div>
    );
}

Row.propTypes = propTypes;

export default Row;
