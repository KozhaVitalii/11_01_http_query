// Выносим нашу функцию запроса на сервер в этот файл и экспортируем её в наш основной файл fetch-api.js

// export function fetchPokemonById(pokemonId) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//   return fetch(url).then(response => response.json());
// }

// или так:

const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
    response.json(),
  );
}

export default { fetchPokemon };
