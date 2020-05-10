import React, { useState } from 'react';

import Row from '../row';
import {
    SwPlanetsList,
    SwPlanetsDetails,
} from '../star-wars-components';

function PlanetsPage() {
    const [itemId, setItemId] = useState('9');

    function updateDetails(id) {
        return setItemId(id);
    }

    return (
        <Row
            left={<SwPlanetsList updateDetails={updateDetails} />}
            right={<SwPlanetsDetails itemId={itemId} />}
        />
    );
}

export default PlanetsPage;
