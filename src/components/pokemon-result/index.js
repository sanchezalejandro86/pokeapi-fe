import React from 'react';
import './styles.css';

function PokemonResult(props) {
    return (
        <div class="result row">
            <div class="col-2">
                <img src={props.url} className="img-thumbnail" alt="pokemon"></img>
            </div>
            <div class="col-10">
                <h6>{props.name}</h6>
            </div>
        </div>
    
    );
}

export default PokemonResult;
