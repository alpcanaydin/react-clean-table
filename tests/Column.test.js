import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Column from '../src/Column';

describe('<Column />', () => {
  it('renders nothing', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper.html()).toBe(null);
  });
});
