import React from 'react';

import swMapService from './sw-map-service';
import ItemList from '../item-list';
import {
    hocSwapiService,
    hocData,
    hocChildFunction,
    hocCompose,
} from '../hoc-helper';

const mapCompose = (serviceFn) => (renderFn) => {
    return hocCompose(
        hocSwapiService(serviceFn),
        hocData,
        hocChildFunction(renderFn)
    )(ItemList);
};

function renderName(data) {
    const { name } = data;
    return <>{name}</>;
}

const mapPeopleService = swMapService('getAllPeople');
const mapPlanetsService = swMapService('getAllPlanets');
const mapStarshipsService = swMapService('getAllStarships');
const mapVehiclesService = swMapService('getAllVehicles');

const SwPersonList = mapCompose(mapPeopleService)(renderName);
const SwPlanetsList = mapCompose(mapPlanetsService)(renderName);
const SwStarshipsList = mapCompose(mapStarshipsService)(renderName);
const SwVehiclesList = mapCompose(mapVehiclesService)(renderName);

export {
    SwPersonList,
    SwPlanetsList,
    SwStarshipsList,
    SwVehiclesList,
};
