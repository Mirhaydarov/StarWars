import swItemDetails from './sw-item-details';
import swMapService from './sw-map-service';
import {
    hocSwapiService,
    hocItemDetails,
    hocCompose,
} from '../hoc-helper';

import ItemDetails from '../item-details/item-details';

const mapStarshipsService = swMapService('getStarship');

const starshipsDetails = [
    { field: 'model', label: 'Model' },
    { field: 'manufacturer', label: 'Manufacturer' },
    { field: 'costInCredits', label: 'Cost' },
    { field: 'length', label: 'Length' },
    { field: 'passengers', label: 'Max passengers' },
    { field: 'cargoCapacity', label: 'Cargo capacity' },
];

export default hocCompose(
    hocSwapiService(mapStarshipsService),
    hocItemDetails,
    swItemDetails(starshipsDetails)
)(ItemDetails);
