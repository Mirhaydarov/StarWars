import imageNotFound from './image/image-not-found.webp';

export default class SwapiService {
    constructor() {
        this.url = 'https://swapi.dev/api';
        this.imageUrl = 'https://starwars-visualguide.com/assets/img';

        this.getResource = this.getResource.bind(this);
        this.getImageResource = this.getImageResource.bind(this);

        this.getAllPeople = this.getAllPeople.bind(this);
        this.getPerson = this.getPerson.bind(this);

        this.getAllPlanets = this.getAllPlanets.bind(this);
        this.getPlanet = this.getPlanet.bind(this);

        this.getAllVehicles = this.getAllVehicles.bind(this);
        this.getVehicles = this.getVehicles.bind(this);

        this.getAllStarships = this.getAllStarships.bind(this);
        this.getStarship = this.getStarship.bind(this);

        this.transformPeople = this.transformPeople.bind(this);
        this.transformPlanet = this.transformPlanet.bind(this);
        this.transformStarship = this.transformStarship.bind(this);
        this.transformVehicles = this.transformVehicles.bind(this);
    }

    async getResource(path, page = 1) {
        const res = await fetch(`${this.url}/${path}/?page=${page}`);

        if (!res.ok) {
            throw new Error(
                `Could not fetch ${path}, received ${res.status}`
            );
        }

        return res.json();
    }

    async getImageResource(path) {
        const res = await fetch(`${this.imageUrl}/${path}.jpg`);

        if (!res.ok) {
            return imageNotFound;
        }

        return res;
    }

    async getAllPeople() {
        const { results } = await this.getResource('people');
        return results.map(this.transformPeople);
    }

    async getPerson(id) {
        const res = await this.getResource(`people/${id}`);
        const imageRes = await this.getImageResource(
            `characters/${id}`
        );

        return {
            getItem: this.transformPeople(res),
            getImg: imageRes,
        };
    }

    async getAllPlanets() {
        const { results } = await this.getResource('planets');
        return results.map(this.transformPlanet);
    }

    async getPlanet(id) {
        const res = await this.getResource(`planets/${id}`);
        const imageRes = await this.getImageResource(`planets/${id}`);

        return {
            getItem: this.transformPlanet(res),
            getImg: imageRes,
        };
    }

    async getAllStarships() {
        const { results } = await this.getResource('starships');
        return results.map(this.transformStarship);
    }

    async getStarship(id) {
        const res = await this.getResource(`starships/${id}`);
        const imageRes = await this.getImageResource(
            `starships/${id}`
        );

        return {
            getItem: this.transformStarship(res),
            getImg: imageRes,
        };
    }

    async getAllVehicles() {
        const { results } = await this.getResource('vehicles');
        return results.map(this.transformVehicles);
    }

    async getVehicles(id) {
        const res = await this.getResource(`vehicles/${id}`);
        const imageRes = await this.getImageResource(
            `vehicles/${id}`
        );

        return {
            getItem: this.transformVehicles(res),
            getImg: imageRes,
        };
    }

    extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    transformPeople(person) {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            hairColor: person.hair_color,
            eyeColor: person.eye_color,
            height: person.height,
            mass: person.mass,
        };
    }

    transformPlanet(planet) {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        };
    }

    transformStarship(starship) {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        };
    }

    transformVehicles(vehicles) {
        return {
            id: this.extractId(vehicles),
            name: vehicles.name,
            model: vehicles.model,
            manufacturer: vehicles.manufacturer,
            costInCredits: vehicles.cost_in_credits,
            speed: vehicles.max_atmosphering_speed,
            length: vehicles.length,
            crew: vehicles.crew,
            passengers: vehicles.passengers,
            cargoCapacity: vehicles.cargo_capacity,
        };
    }
}
