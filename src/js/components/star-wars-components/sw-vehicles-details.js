import swItemDetails from './sw-item-details';
import swMapService from './sw-map-service';
import {
    hocSwapiService,
    hocItemDetails,
    hocCompose,
} from '../hoc-helper';

import ItemDetails from '../item-details/item-details';

const mapVehiclesService = swMapService('getVehicles');

const vehiclesDetails = [
    { field: 'model', label: 'Model' },
    { field: 'manufacturer', label: 'Manufacturer' },
    { field: 'costInCredits', label: 'Cost' },
    { field: 'speed', label: 'Speed' },
    { field: 'length', label: 'Length' },
    { field: 'passengers', label: 'Max passengers' },
    { field: 'cargoCapacity', label: 'Cargo capacity' },
];

export default hocCompose(
    hocSwapiService(mapVehiclesService),
    hocItemDetails,
    swItemDetails(vehiclesDetails)
)(ItemDetails);
