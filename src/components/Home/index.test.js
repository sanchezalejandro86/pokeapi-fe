import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from ".";

Enzyme.configure({ adapter: new Adapter() });


describe('HomePage', () => {

    it("should render ok", () => {
        
        const wrapper = shallow(<HomePage />);

        expect(wrapper.find('SearchBox').length).toEqual(1);
        expect(wrapper.find('PokemonList').length).toEqual(1);

    });

});