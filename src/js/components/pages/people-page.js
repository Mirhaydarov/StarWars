import React, { useState } from 'react';

import Row from '../row';
import {
    SwPersonList,
    SwPersonDetails,
} from '../star-wars-components';

function PeoplePage() {
    const [itemId, setItemId] = useState('1');

    function updateDetails(id) {
        return setItemId(id);
    }

    return (
        <Row
            left={<SwPersonList updateDetails={updateDetails} />}
            right={<SwPersonDetails itemId={itemId} />}
        />
    );
}

export default PeoplePage;
