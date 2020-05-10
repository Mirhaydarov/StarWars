import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';

function hocItemDetails(Wrapped) {
    return function hocItemDetailsWrap(props) {
        hocItemDetailsWrap.propTypes = {
            itemId: PropTypes.string.isRequired,
            getData: PropTypes.func.isRequired,
        };
        const { itemId, getData } = props;

        const [item, setItem] = useState({});
        const [image, setImage] = useState('');
        const [loading, setLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        function imageNotFound(response) {
            const { url: imageRes } = response;

            if (typeof response === 'string') {
                return response;
            }

            return imageRes;
        }

        function updateDetails(id) {
            getData(id)
                .then(({ getItem, getImg }) => {
                    return [
                        setItem(getItem),
                        setImage(imageNotFound(getImg)),
                        setLoading(false),
                    ];
                })
                .catch((error) => {
                    setHasError(error);
                    setLoading(false);
                });
        }

        function showSpinnerWhileTakingData() {
            return setLoading(true);
        }

        useEffect(() => {
            updateDetails(itemId);
            showSpinnerWhileTakingData();
        }, [itemId, getData]);

        if (loading) {
            return <Spinner />;
        }

        if (hasError) {
            return <p>Error</p>;
        }

        return <Wrapped item={item} image={image} />;
    };
}

export default hocItemDetails;
