import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SearchBox from ".";

describe('SearchBox', () => {
  it("should render ok", () => {

      const wrapper = shallow(
        <SearchBox  />
      );
      
      const button = wrapper.find('button');
      expect(button.prop('type')).toEqual('submit');
      expect(button.text()).toEqual('Buscar');
  });

  it("should submit input value", async () => {
    const onSubmit = jest.fn();
    
    const wrapper = shallow(
      <SearchBox onSubmit={onSubmit} />
    );

    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'ale'}});

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});