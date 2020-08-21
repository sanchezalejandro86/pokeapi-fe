import React from 'react';
import './styles.css';

function PokemonResult(props) {
    return (
        <div className="result row">
            <div className="col-2">
                <img src={props.image} className="img-thumbnail" alt="pokemon"></img>
            </div>
            <div className="col-10">
                <h6>{props.name}</h6>
            </div>
        </div>
    
    );
}

export default PokemonResult;
