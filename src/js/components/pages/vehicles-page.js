import React, { useState } from 'react';

import Row from '../row';
import {
    SwVehiclesList,
    SwVehiclesDetails,
} from '../star-wars-components';

function VehiclesPage() {
    const [itemId, setItemId] = useState('4');

    function updateDetails(id) {
        return setItemId(id);
    }

    return (
        <Row
            left={<SwVehiclesList updateDetails={updateDetails} />}
            right={<SwVehiclesDetails itemId={itemId} />}
        />
    );
}

export default VehiclesPage;
