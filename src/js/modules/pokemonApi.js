export class PokemonApi {
  constructor() {
    this.nextUrl = null;
    this.prevUrl = null;
  }

  getPokemon() {
    const BASE_URL = 'https://pokeapi.co/api/v2';
    const END_POINT = '/pokemon';
    const PARAMS = new URLSearchParams({
      offset: 0,
      limit: 10,
    });
    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

    return fetch(url).then(res => res.json());
  }

  getNextPage() {
    return this.getPokemonByUrl(this.nextUrl);
  }
  getPrevPage() {
    return this.getPokemonByUrl(this.prevUrl);
  }

  getPokemonByUrl(url) {
    console.log(url);
    return fetch(url)
      .then(res => res.json())
      .then(result => {
        return result;
      });
  }
}
