import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function hocItemDetails(Wrapped) {
    return function hocItemDetailsWrap(props) {
        hocItemDetailsWrap.propTypes = {
            itemId: PropTypes.string.isRequired,
            getData: PropTypes.func.isRequired,
            getImage: PropTypes.func.isRequired,
        };
        const { itemId, getData, getImage } = props;

        const [item, setItem] = useState({});
        const [image, setImage] = useState('');
        const [loading, setLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        function updateDetails(id) {
            getData(id)
                .then((person) => {
                    return [
                        setItem(person),
                        setImage(getImage(id)),
                        setLoading(false),
                    ];
                })
                .catch((error) => {
                    setHasError(error);
                    setLoading(false);
                });
        }

        useEffect(() => {
            updateDetails(itemId);
        }, [itemId, getData, getImage]);

        if (loading) {
            return <p>Loading...</p>;
        }

        if (hasError) {
            return <p>Error</p>;
        }

        return <Wrapped item={item} image={image} />;
    };
}

export default hocItemDetails;
