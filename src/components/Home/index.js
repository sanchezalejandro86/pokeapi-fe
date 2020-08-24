import React, { Fragment, useState, useEffect } from 'react';
import './styles.css';

import SearchBox from '../SearchBox';
import PokemonList from '../PokemonList';
import Footer from '../Footer';
import PokemonService from '../../services/Pokemon';

function HomePage() {

  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData(){
      try{
        setIsLoading(true);
        let response = await PokemonService.find(searchValue);
        setResults(response.data);
      }finally{
        setIsLoading(false);
      }
    }
    if(searchValue){
      fetchData();
    }
  }, [searchValue]);

  return (
    <Fragment>
      
      <div className="container">
      
          <h1 className="title">Pokemon finder</h1> 
          <h6 className="subtitle">El que quiere Pokemon, que lo busque</h6> 
      
          <SearchBox onSubmit={setSearchValue}/> 
      
          <h4 className="title">Resultados de la búsqueda</h4>      
          <PokemonList results={results} isLoading={isLoading}/> 
    
      </div>
      <Footer />

    </Fragment>
  );
}

export default HomePage;
