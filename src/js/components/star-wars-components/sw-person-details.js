import swItemDetails from './sw-item-details';
import swMapService from './sw-map-service';
import {
    hocSwapiService,
    hocItemDetails,
    hocCompose,
} from '../hoc-helper';
import ItemDetails from '../item-details/item-details';

const mapPeopleService = swMapService('getPerson');

const personDetails = [
    { field: 'gender', label: 'Gender' },
    { field: 'birthYear', label: 'Birth year' },
    { field: 'eyeColor', label: 'Eye color' },
    { field: 'hairColor', label: 'Hair color' },
    { field: 'height', label: 'Height' },
    { field: 'mass', label: 'Mass' },
];

export default hocCompose(
    hocSwapiService(mapPeopleService),
    hocItemDetails,
    swItemDetails(personDetails)
)(ItemDetails);
