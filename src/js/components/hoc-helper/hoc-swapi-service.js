import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SwapiProvider from '../swapi-service-context';

const hocSwapiService = (mapService) => (Wrapped) => {
    return function hocSwapiServiceWrap(props) {
        hocSwapiServiceWrap.propTypes = {
            itemId: PropTypes.string,
            updateDetails: PropTypes.func,
        };
        hocSwapiServiceWrap.defaultProps = {
            itemId: '',
            updateDetails: () => {},
        };

        const { itemId, updateDetails } = props;
        const context = useContext(SwapiProvider);
        const serviceProps = mapService(context);
        const { getData } = serviceProps;

        return (
            <Wrapped
                itemId={itemId}
                updateDetails={updateDetails}
                getData={getData}
            />
        );
    };
};

export default hocSwapiService;
