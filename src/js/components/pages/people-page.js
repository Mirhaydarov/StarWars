import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import {
    SwPersonList,
    SwPersonDetails,
} from '../star-wars-components';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.objectOf(PropTypes.string),
    }).isRequired,

    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

function PeoplePage({ match: { params }, history }) {
    const { id: urlId = 1 } = params;

    function updateDetails(listId) {
        return history.push(listId);
    }

    return (
        <Row
            left={<SwPersonList updateDetails={updateDetails} />}
            right={<SwPersonDetails itemId={urlId} />}
        />
    );
}

PeoplePage.propTypes = propTypes;

export default withRouter(PeoplePage);
