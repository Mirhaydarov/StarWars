const hocCompose = (...functions) => (component) => {
    return functions.reduceRight((previousValue, currentValue) => {
        return currentValue(previousValue);
    }, component);
};

export default hocCompose;
