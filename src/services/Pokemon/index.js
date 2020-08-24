import axios from 'axios';

//const urlPokeAPIMiddleware = "http://localhost:3000/pokemons";
export const API = "https://pokeapi-middleware.herokuapp.com/pokemons";

const PokemonService = {

    find: async function (name) {
        return await axios.get(API + "?name=" + name);
    }
    
}

export default PokemonService;
