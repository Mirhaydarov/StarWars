import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import {
    SwVehiclesList,
    SwVehiclesDetails,
} from '../star-wars-components';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.objectOf(PropTypes.string),
    }).isRequired,

    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

function VehiclesPage({ match: { params }, history }) {
    const { id: urlId = 4 } = params;

    function updateDetails(listId) {
        return history.push(listId);
    }

    return (
        <Row
            left={<SwVehiclesList updateDetails={updateDetails} />}
            right={<SwVehiclesDetails itemId={urlId} />}
        />
    );
}

VehiclesPage.propTypes = propTypes;

export default withRouter(VehiclesPage);
