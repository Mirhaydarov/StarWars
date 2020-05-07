export default class SwapiService {
    constructor() {
        this.url = 'https://swapi.dev/api';
        this.imageUrl = 'https://starwars-visualguide.com/assets/img';

        this.getResource = this.getResource.bind(this);
    }

    async getResource(path, page = 1) {
        const res = await fetch(`${this.url}/${path}/?page=${page}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${path}, received ${res.status}`);
        }

        return res.json();
    }
}
