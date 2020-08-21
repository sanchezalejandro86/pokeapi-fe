import React from 'react';
import './styles.css';
import PokemonResult from '../pokemon-result';

function PokemonList(props) {
    return (
        <div>
            <PokemonResult name="ale" url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png"/>
            <PokemonResult name="ale2" url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"/>
        
        </div>
    );
}

export default PokemonList;
