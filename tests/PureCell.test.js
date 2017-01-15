import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PureCell from '../src/PureCell';

describe('<PureCell />', () => {
  it('renders given data in a <span> element if data is string or number', () => {
    const wrapper = shallow(<PureCell data="Data" />);
    expect(wrapper.matchesElement(<span>Data</span>)).toBe(true);

    const wrapper2 = shallow(<PureCell data={10} />);
    expect(wrapper2.html()).toEqual('<span>10</span>');
  });

  it('renders given data in a <code> element if data is not string', () => {
    const wrapper = shallow(<PureCell data={[1, 2, 3]} />);
    expect(wrapper.find('code').length).toEqual(1);
  });
});
