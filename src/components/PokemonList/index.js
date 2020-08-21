import React from 'react';
import './styles.css';
import PokemonResult from '../PokemonResult';

function PokemonList(props) {
    const {results} = props;
    return (
        <div>
            {
                results && results.length > 0? 
                    results.map((pokemon, index) => {
                        console.log(pokemon);
                        return <PokemonResult key={index} name={pokemon.name} image={pokemon.image} /> 
                    })
                    :
                    "No hay resultados"
            }
           
        </div>
    );
}

export default PokemonList;
