import React, { Element } from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Row from '../src/Row';
import Column from '../src/Column';
import PureCell from '../src/PureCell';

describe('<Row />', () => {
  it('renders <tr> element', () => {
    const data = {
      key1: 'value 1'
    };

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find('tr').length).toEqual(1);
  });

  it('passes trClassName to <tr> element', () => {
    const data = {
      key1: 'value 1'
    };

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} trClassName="trClass" />);
    expect(wrapper.find('tr').hasClass('trClass')).toBe(true);
  });

  it('passes tdClassName to <td> elements', () => {
    const data = {
      key1: 'value 1'
    };

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} tdClassName="tdClass" />);
    expect(wrapper.find('td').get(0).props.className).toEqual('tdClass');
  });

  it('passes spesific tdClassName to <Column/> component', () => {
    const data = {
      key1: 'value 1'
    };

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
        tdClassName="spesificClass"
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} tdClassName="tdClass" />);
    expect(wrapper.find('td').get(0).props.className).toEqual('tdClass spesificClass');
  });

  it('renders <td> element n times according to <Column /> components', () => {
    const data = {
      key1: 'value 1',
      key2: 'value 2',
      key3: 'value 3'
    };

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
      />,
      <Column
        field="key2"
        header="Simple Header 2"
      />,
      <Column
        field="key3"
        header="Simple Header 3"
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find('td').length).toEqual(3);
  });

  it('renders <PureCell /> if cell prop not passed to <Column />', () => {
    const data = {
      key1: 'value 1'
    };

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find(PureCell).length).toEqual(1);
  });

  it('renders custom cell if cell prop specified in <Column /> component', () => {
    const data = {
      key1: 'value 1'
    };

    const CustomCell = (): Element<*> => <span>Custom Cell</span>;

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
        cell={<CustomCell />}
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find(CustomCell).length).toEqual(1);
  });

  it('passes correct data to cell component', () => {
    const data = {
      key1: 'value 1'
    };

    const CustomCell = (): Element<*> => <span>Custom Cell</span>;

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
        cell={<CustomCell />}
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find(CustomCell).props()).toEqual({ data: 'value 1' });
  });

  it('passes correct data as array to cell component if field prop is an array', () => {
    const data = {
      key1: 'value 1',
      key2: 'value 2',
      key3: 'value 3'
    };

    const CustomCell = (): Element<*> => <span>Custom Cell</span>;

    const columns = [
      <Column
        field={['key1', 'key3']}
        header="Simple Header"
        cell={<CustomCell />}
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find(CustomCell).props()).toEqual({ data: ['value 1', 'value 3'] });
  });

  it('preserves props in custom cell while passing data to props', () => {
    const data = {
      key1: 'value 1'
    };

    const CustomCell = (): Element<*> => <span>Custom Cell</span>;

    const columns = [
      <Column
        field="key1"
        header="Simple Header"
        cell={<CustomCell prop1="propValue" />}
      />
    ];

    const wrapper = shallow(<Row data={data} columns={columns} />);
    expect(wrapper.find(CustomCell).props()).toEqual({ data: 'value 1', prop1: 'propValue' });
  });
});
