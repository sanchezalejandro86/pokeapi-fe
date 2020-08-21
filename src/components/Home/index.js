import React, { Fragment, useState } from 'react';
import './styles.css';

import SearchBox from '../SearchBox';
import PokemonList from '../PokemonList';
import Footer from '../Footer';

function HomePage() {

  const [results, setResults] = useState([]);

  return (
    <Fragment>
      
      <div className="container">
      
          <h1 className="title">Pokemon finder</h1> 
          <h6 className="subtitle">El que quiere Pokemon, que lo busque</h6> 
      
          <SearchBox handleResults={setResults}/> 
      
          <h4 className="title">Resultados de la búsqueda</h4>      
          <PokemonList results={results} /> 
    
      </div>
      <Footer />

    </Fragment>
  );
}

export default HomePage;
