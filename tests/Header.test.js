import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Header from '../src/Header';
import HeaderItem from '../src/HeaderItem';

describe('<Header />', () => {
  it('renders <thead> and <tr> element', () => {
    const items = [{
      title: 'Simple Header'
    }];

    const wrapper = shallow(<Header items={items} />);
    expect(wrapper.find('thead').length).toEqual(1);
    expect(wrapper.find('tr').length).toEqual(1);
  });

  it('renders <HeaderItem/> components', () => {
    const items = [
      {
        title: 'Simple Header'
      },
      {
        title: 'Simple Header 2'
      }
    ];

    const wrapper = shallow(<Header items={items} />);
    expect(wrapper.find(HeaderItem).length).toEqual(2);
  });
});
