import React from 'react';
import PropTypes from 'prop-types';

import { ItemDetailsChildren } from '../item-details/item-details';

const swItemDetails = (childrenArray) => (Wrapped) => {
    return function swItemDetailsWrap(props) {
        swItemDetailsWrap.propTypes = {
            item: PropTypes.objectOf(PropTypes.string).isRequired,
            image: PropTypes.string.isRequired,
        };
        const { item, image } = props;
        return (
            <Wrapped item={item} image={image}>
                {childrenArray.map(({ field, label }) => {
                    return (
                        <ItemDetailsChildren
                            key={field}
                            field={field}
                            label={label}
                        />
                    );
                })}
            </Wrapped>
        );
    };
};

export default swItemDetails;
