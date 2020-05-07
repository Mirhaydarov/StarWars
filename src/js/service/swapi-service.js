export default class SwapiService {
    constructor() {
        this.url = 'https://swapi.dev/api';
        this.imageUrl = 'https://starwars-visualguide.com/assets/img';

        this.getResource = this.getResource.bind(this);

        this.getAllPeople = this.getAllPeople.bind(this);
        this.getPerson = this.getPerson.bind(this);
        this.getPersonImage = this.getPersonImage.bind(this);

        this.transformPeople = this.transformPeople.bind(this);
        this.transformPlanet = this.transformPlanet.bind(this);
        this.transformStarship = this.transformStarship.bind(this);
        this.transformVehicles = this.transformVehicles.bind(this);
    }

    async getResource(path, page = 1) {
        const res = await fetch(`${this.url}/${path}/?page=${page}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${path}, received ${res.status}`);
        }

        return res.json();
    }

    async getAllPeople() {
        const { results } = await this.getResource('people');
        return results.map(this.transformPeople);
    }

    async getPerson(id) {
        const res = await this.getResource(`people/${id}`);
        return this.transformPeople(res);
    }

    getPersonImage(id) {
        return `${this.imageUrl}/characters/${id}.jpg`;
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
            homeworld: person.homeworld,
            starships: person.starships,
            films: person.films,
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
            speed: vehicles.speed,
            length: vehicles.length,
            crew: vehicles.crew,
            passengers: vehicles.passengers,
            cargoCapacity: vehicles.cargo_capacity,
        };
    }
}
