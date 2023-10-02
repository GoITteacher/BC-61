import { PokemonApi } from './modules/pokemonApi';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  pokemonListEl: document.querySelector('.js-pokemon-list'),
  prevBtnEl: document.querySelector('.js-btn-prev'),
  nextBtnEl: document.querySelector('.js-btn-next'),
};

const pokemonApi = new PokemonApi();
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  pokemonApi
    .getPokemon()
    .then(data => {
      pokemonApi.nextUrl = data.next;
      pokemonApi.prevUrl = data.previous;
      updateBtn();
      const promises = data.results.map(obj => {
        return pokemonApi.getPokemonByUrl(obj.url);
      });

      return Promise.all(promises);
    })
    .then(pokemons => {
      renderPokemons(pokemons);
    });
});

refs.nextBtnEl.addEventListener('click', () => {
  pokemonApi
    .getNextPage()
    .then(data => {
      pokemonApi.nextUrl = data.next;
      pokemonApi.prevUrl = data.previous;
      updateBtn();
      const promises = data.results.map(obj => {
        return pokemonApi.getPokemonByUrl(obj.url);
      });

      return Promise.all(promises);
    })
    .then(pokemons => {
      renderPokemons(pokemons);
    });
});

refs.prevBtnEl.addEventListener('click', () => {
  pokemonApi
    .getPrevPage()
    .then(data => {
      pokemonApi.nextUrl = data.next;
      pokemonApi.prevUrl = data.previous;
      updateBtn();
      const promises = data.results.map(obj => {
        return pokemonApi.getPokemonByUrl(obj.url);
      });

      return Promise.all(promises);
    })
    .then(pokemons => {
      renderPokemons(pokemons);
    });
});

//=====================================
function renderPokemons(pokemons) {
  const markup = pokemons
    .map(({ order, base_experience, sprites, name, id, weight, height }) => {
      return `<li class="card pokemon">
    <img
      class="pokemon-img"
      src="${sprites.front_default}"
      alt="#"
    />
    <div class="pokemon-header">
      <h4 class="pokemon-title">${name}</h4>
      <span class="pokemon-id">#${(id + '').padStart(5, '0')}</span>
    </div>
  
    <div class="pokemon-desc">
      <span>Weight: ${weight}</span>
      <span>Height: ${height}</span>
      <span>Experience: ${base_experience}</span>
      <span>Order: ${order}</span>
    </div>
  
    <div class="pokemon-footer"></div>
  </li>`;
    })
    .join('');

  refs.pokemonListEl.innerHTML = markup;
}

function updateBtn() {
  refs.nextBtnEl.disabled = !pokemonApi.nextUrl;
  refs.prevBtnEl.disabled = !pokemonApi.prevUrl;
}
