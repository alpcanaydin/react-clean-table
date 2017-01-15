import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Body from '../src/Body';
import Row from '../src/Row';
import Column from '../src/Column';

describe('<Body />', () => {
  it('renders <tbody> element', () => {
    const data = [
      {
        key1: 'value 1',
        key2: 'value 2'
      },
      {
        key1: 'value 3',
        key2: 'value 4'
      }
    ];

    const columns = [
      <Column field="key1" />,
      <Column field="key2" />
    ];

    const wrapper = shallow(<Body data={data} columns={columns} />);
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it('renders <Row/> components', () => {
    const data = [
      {
        key1: 'value 1',
        key2: 'value 2'
      },
      {
        key1: 'value 3',
        key2: 'value 4'
      }
    ];

    const columns = [
      <Column field="key1" />,
      <Column field="key2" />
    ];

    const wrapper = shallow(<Body data={data} columns={columns} />);
    expect(wrapper.find(Row).length).toEqual(2);
  });
});
