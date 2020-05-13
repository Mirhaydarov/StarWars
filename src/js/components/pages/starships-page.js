import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import {
    SwStarshipsList,
    SwStarshipsDetails,
} from '../star-wars-components';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.objectOf(PropTypes.string),
    }).isRequired,

    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

function StarshipsPage({ match: { params }, history }) {
    const { id: urlId = '9' } = params;

    function updateDetails(listId) {
        return history.push(listId);
    }

    return (
        <Row
            left={<SwStarshipsList updateDetails={updateDetails} />}
            right={<SwStarshipsDetails itemId={urlId} />}
        />
    );
}

StarshipsPage.propTypes = propTypes;

export default withRouter(StarshipsPage);
