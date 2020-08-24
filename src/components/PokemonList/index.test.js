import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PokemonList from ".";

describe('PokemonList', () => {

  it('should be loading', () => {
    const isLoading = true;
    const wrapper = shallow(
        <PokemonList results={[]} isLoading={isLoading}/>
    );
    
    expect(wrapper.text()).toEqual("Cargando..."); 
  });

  it("should have no results", () => {
    const results = [];
    
    const wrapper = shallow(
        <PokemonList results={results} isLoading={false}/>
    );

    expect(wrapper.text()).toEqual("No hay resultados");     
  });

  it("should have 2 results", () => {

    const results = [{id: 1, name: "fake1", image: "url1"}, {id: 2, name: "fake2", image: "url2"}];

    const wrapper = shallow(
        <PokemonList results={results} isLoading={false}/>
    );
    
    expect(wrapper.find("PokemonResult").length).toBe(2)          
  });
});