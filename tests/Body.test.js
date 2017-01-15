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

  it('passes tbodyClassName to <tbody> element', () => {
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

    const wrapper = shallow(<Body data={data} columns={columns} tbodyClassName="tbodyClass" />);
    expect(wrapper.find('tbody').hasClass('tbodyClass')).toBe(true);
  });

  it('passes trClassName and tdClassName props to <Row /> components.', () => {
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

    const wrapper = shallow(
      <Body
        data={data}
        columns={columns}
        trClassName="trClass"
        tdClassName="tdClass"
      />
    );

    expect(wrapper.find(Row).get(0).props.trClassName).toEqual('trClass');
    expect(wrapper.find(Row).get(0).props.tdClassName).toEqual('tdClass');
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
