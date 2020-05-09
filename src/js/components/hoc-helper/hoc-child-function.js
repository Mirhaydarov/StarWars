import React from 'react';
import PropTypes from 'prop-types';

const hocChildFunction = (fn) => (Wrapped) => {
    return function hocChildFunctionWrap(props) {
        hocChildFunctionWrap.propTypes = {
            data: PropTypes.arrayOf(
                PropTypes.objectOf(PropTypes.string)
            ).isRequired,
            updateDetails: PropTypes.func.isRequired,
        };
        const { data, updateDetails } = props;

        return (
            <Wrapped data={data} updateDetails={updateDetails}>
                {fn}
            </Wrapped>
        );
    };
};

export default hocChildFunction;
