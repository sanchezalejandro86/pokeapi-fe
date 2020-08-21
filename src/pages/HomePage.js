import React from 'react';
import './styles.css';

import SearchBox from '../components/SearchBox';

function HomePage() {
  return (
    <div className="container">
     <h1 className="title">Pokemon finder</h1> 
     <h6 className="subtitle">El que quiere Pokemon, que lo busque</h6> 
     
     <SearchBox /> 
 
    </div>
  );
}

export default HomePage;
