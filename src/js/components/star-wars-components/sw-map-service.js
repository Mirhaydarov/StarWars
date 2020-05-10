function swMapService(label) {
    return (swapiService) => {
        return {
            getData: swapiService[label],
        };
    };
}

export default swMapService;
