import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import {
    SwPlanetsList,
    SwPlanetsDetails,
} from '../star-wars-components';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.objectOf(PropTypes.string),
    }).isRequired,

    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

function PlanetsPage({ match: { params }, history }) {
    const { id: urlId = 9 } = params;

    function updateDetails(listId) {
        return history.push(listId);
    }

    return (
        <Row
            left={<SwPlanetsList updateDetails={updateDetails} />}
            right={<SwPlanetsDetails itemId={urlId} />}
        />
    );
}

PlanetsPage.propTypes = propTypes;

export default withRouter(PlanetsPage);
