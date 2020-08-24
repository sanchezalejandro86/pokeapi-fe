import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from ".";
import PokemonService from "../../services/Pokemon";

Enzyme.configure({ adapter: new Adapter() });


describe('HomePage', () => {
    
    it("should render ok", () => {
        
        const wrapper = shallow(<HomePage />);

        expect(wrapper.find('SearchBox').length).toEqual(1);
        expect(wrapper.find('PokemonList').length).toEqual(1);

    });

    /*
  it("should show 1 result", () => {
    let useEffect = jest.spyOn(React, "useEffect");

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    
    mockUseEffect();
    mockUseEffect();

    const findSpy = jest.spyOn(PokemonService, 'find');
    const data = {data:[{}]};

    PokemonService.find.mockImplementationOnce(() => Promise.resolve(data));

    const wrapper = shallow(<HomePage />);
    
    wrapper.find('SearchBox').simulate('submit', { preventDefault: () => {} });

    expect(findSpy).toHaveBeenCalledWith("fake");

  });
*/
  /*
  it("should submit input value", async () => {
    const handleResults = jest.fn((a) => console.log(a));
    const findSpy = jest.spyOn(PokemonService, 'find');
    const data = {data:[{}]};

    PokemonService.find.mockImplementationOnce(async() => {
      let resp = await Promise.resolve(data);
    console.log("retrieving results");
  return resp;}
      );

    const wrapper = shallow(
      <SearchBox handleResults={handleResults} />
    );

    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'ale'}});
    //expect(input.value).toEqual('ale');

    await wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(findSpy).toBeCalled();
console.log("checking..")
    expect(handleResults).toBeCalled();//.toHaveBeenCalledTimes(1);
  });*/

});