import React, { useState } from 'react';

import Row from '../row';
import {
    SwStarshipsList,
    SwStarshipsDetails,
} from '../star-wars-components';

function StarshipsPage() {
    const [itemId, setItemId] = useState('9');

    function updateDetails(id) {
        return setItemId(id);
    }

    return (
        <Row
            left={<SwStarshipsList updateDetails={updateDetails} />}
            right={<SwStarshipsDetails itemId={itemId} />}
        />
    );
}

export default StarshipsPage;
