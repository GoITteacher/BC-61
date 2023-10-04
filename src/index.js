// import { BooksApi } from './js/modules/booksAPI';
// import { UsersAPI } from './js/modules/usersAPI';

// const booksApi = new BooksApi();

// function getMyData() {
//   console.log('start');

//   booksApi.getBooks().then(data => {
//     console.log(data);
//   });

//   console.log('end');
// }

// async function getMyData() {
//   console.log('start');

//   const data = await booksApi.getBooks();

//   if (data) {
//     const markup = data.map(el => `<li>${el.title}</li>`).join('');
//     document.body.insertAdjacentHTML('beforeend', markup);
//   }

//   console.log('end');
// }

// getMyData();

// ================================

/* 
async function test() {}

const test1 = async () => {};

const obj = {
  async test() {},
};

class User {
  static async test1() {}
  async test() {}
}

[1, 2, 3, 4].map(async () => {});
 */

// =======================================

// async function getPokemon() {
//   const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10';

//   const res = await fetch(url);
//   const { results } = await res.json();
//   console.log(results);

//   const url1 = results[5].url;
//   const res1 = await fetch(url1);
//   const pokemon = await res1.json();
//   console.log(pokemon);
// }

// getPokemon();

// async function getPokemons(){
//   const response = await fetch();
//   const data = await response.json();
// }

// ==================================

// async function getPokemonList() {
//   const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10';
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.results;
// }

// async function getPokemonListInfo(arr) {
//   console.log(arr);

//   const promises = [];

//   for (let i = 0; i < arr.length; i++) {
//     const data = await fetch(arr[i].url).then(res => res.json());
//     promises.push(data);
//   }

//   const data = await Promise.all(promises);
//   console.log(data);
// }

// getPokemonList().then(arr => {
//   getPokemonListInfo(arr);
// });
