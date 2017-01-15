import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import HeaderItem from '../src/HeaderItem';

describe('<HeaderItem />', () => {
  it('renders th element', () => {
    const wrapper = shallow(<HeaderItem title="Simple Header" />);
    expect(wrapper.matchesElement(<th>Simple Header</th>)).toBe(true);
  });

  it('passes thClassName to <th> element', () => {
    const wrapper = shallow(<HeaderItem title="Simple Header" thClassName="thClass" />);
    expect(wrapper.find('th').hasClass('thClass')).toBe(true);
  });

  it('renders th element in given size', () => {
    const wrapper = shallow(<HeaderItem title="Simple Header" size={100} />);
    expect(wrapper.matchesElement(<th style={{ width: '100px' }}>Simple Header</th>)).toBe(true);

    const wrapper2 = shallow(<HeaderItem title="Simple Header" size="50%" />);
    expect(wrapper2.matchesElement(<th style={{ width: '50%' }}>Simple Header</th>)).toBe(true);
  });
});
