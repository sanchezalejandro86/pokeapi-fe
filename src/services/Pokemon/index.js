import axios from 'axios';

//const urlPokeAPIMiddleware = "http://localhost:3000/pokemons";
const urlPokeAPIMiddleware = "https://pokeapi-middleware.herokuapp.com/pokemons";
const PokemonService = {

    find: async function (name) {
        return await axios.get(urlPokeAPIMiddleware + "?name=" + name);
    }
    
}

export default PokemonService;
