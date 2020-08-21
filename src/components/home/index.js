import React, { Fragment } from 'react';
import './styles.css';

import SearchBox from '../search-box';
import PokemonList from '../pokemon-list';
import Footer from '../footer';

function HomePage() {
  return (
    <Fragment>
      
      <div className="container">
      
          <h1 className="title">Pokemon finder</h1> 
          <h6 className="subtitle">El que quiere Pokemon, que lo busque</h6> 
      
          <SearchBox /> 
      
          <h4 className="title">Resultados de la búsqueda</h4>      
          <PokemonList /> 
    
      </div>
      <Footer />

    </Fragment>
  );
}

export default HomePage;
