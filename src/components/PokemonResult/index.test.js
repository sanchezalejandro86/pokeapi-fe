import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PokemonResult from ".";

describe('PokemonResult', () => {

  it("should set name prop", () => {
    const results = [];
    
    const wrapper = shallow(
        <PokemonResult name="ale" image="url" />
    );

    expect(wrapper.find("h6").text()).toEqual("ale");   
    expect(wrapper.find("img").prop('src')).toEqual("url");      
  });
});