import React from 'react';
import PropTypes from 'prop-types';

import './item-details.scss';

const propTypesItemDetails = {
    item: PropTypes.objectOf(PropTypes.string).isRequired,
    getImage: PropTypes.func.isRequired,
    children: PropTypes.node,
};

const defaultPropsItemDetails = {
    children: [],
};

const propTypesItemDetailsChildren = {
    label: PropTypes.string.isRequired,

    item: PropTypes.objectOf(PropTypes.string),
    field: PropTypes.string,
};

const defaultPropsItemDetailsChildren = {
    item: {},
    field: '',
};

function ItemDetailsChildren({ item, field, label }) {
    return (
        <li className='item-details__list-item'>
            {`${label}:`}
            <p className='item-details__desc'>{item[field]}</p>
        </li>
    );
}

function ItemDetails(props) {
    const { item, getImage, children } = props;
    const { id, name } = item;

    if (!name) {
        return <p>Please selected item from a list</p>;
    }

    return (
        <div className='item-details'>
            <img
                className='item-details__img'
                src={getImage(id)}
                alt={name}
            />
            <div className='item-details__box'>
                <h2 className='item-details__title'>{name}</h2>
                <ul className='item-details__list'>
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { item })
                    )}
                </ul>
            </div>
        </div>
    );
}

ItemDetails.propTypes = propTypesItemDetails;
ItemDetails.defaultProps = defaultPropsItemDetails;
ItemDetailsChildren.propTypes = propTypesItemDetailsChildren;
ItemDetailsChildren.defaultProps = defaultPropsItemDetailsChildren;

export default ItemDetails;
export { ItemDetailsChildren };
