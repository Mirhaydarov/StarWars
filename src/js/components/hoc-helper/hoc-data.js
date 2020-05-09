import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function hocData(Wrapped) {
    return function hocDataWrap(props) {
        hocDataWrap.propTypes = {
            getData: PropTypes.func.isRequired,
            updateDetails: PropTypes.func.isRequired,
        };
        const { getData, updateDetails } = props;

        const [data, setData] = useState();
        const [loading, setLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        function updateData() {
            getData()
                .then((res) => {
                    return [setData(res), setLoading(false)];
                })
                .catch((error) => {
                    setHasError(error);
                    setLoading(false);
                });
        }

        useEffect(() => {
            updateData();
        }, []);

        if (loading) {
            return <p>Loading...</p>;
        }

        if (hasError) {
            return <p>Error</p>;
        }

        return <Wrapped data={data} updateDetails={updateDetails} />;
    };
}

export default hocData;
