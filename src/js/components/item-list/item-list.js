import React from 'react';
import PropTypes from 'prop-types';

import './item-list.scss';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
        .isRequired,
    updateDetails: PropTypes.func.isRequired,
    children: PropTypes.func,
};

const defaultProps = {
    children: () => {},
};

function ItemList(props) {
    const { updateDetails, data, children: renderLabel } = props;

    const elements = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className='list__item' key={id}>
                <button
                    className='list__item-action'
                    type='button'
                    onClick={() => updateDetails(id)}
                >
                    {label}
                </button>
            </li>
        );
    });

    return (
        <div className='item-list'>
            <ul className='list'>{elements}</ul>
        </div>
    );
}

ItemList.propTypes = propTypes;
ItemList.defaultProps = defaultProps;

export default ItemList;
