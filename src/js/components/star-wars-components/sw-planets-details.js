import swItemDetails from './sw-item-details';
import swMapService from './sw-map-service';
import {
    hocSwapiService,
    hocItemDetails,
    hocCompose,
} from '../hoc-helper';

import ItemDetails from '../item-details/item-details';

const mapPlanetsService = swMapService('getPlanet');

const planetsDetails = [
    { field: 'population', label: 'Population' },
    { field: 'rotationPeriod', label: 'Rotation period' },
    { field: 'diameter', label: 'Diameter' },
];

export default hocCompose(
    hocSwapiService(mapPlanetsService),
    hocItemDetails,
    swItemDetails(planetsDetails)
)(ItemDetails);
