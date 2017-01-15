import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Table from '../src/Table';
import Header from '../src/Header';
import Body from '../src/Body';
import Column from '../src/Column';

describe('<Table />', () => {
  it('renders <table> element', () => {
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

    const table = (
      <Table data={data}>
        <Column field="key1" />
        <Column field="key2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find('table').length).toEqual(1);
  });

  it('passes all props to <table> element', () => {
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

    const table = (
      <Table data={data} className="table is-bordered" cellPadding={3}>
        <Column field="key1" />
        <Column field="key2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find('table').hasClass('is-bordered')).toBe(true);
    expect(wrapper.find('table').prop('cellPadding')).toEqual(3);
  });

  it('renders <Header /> component', () => {
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

    const table = (
      <Table data={data}>
        <Column field="key1" />
        <Column field="key2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('passes related classes to <Header /> component', () => {
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

    const table = (
      <Table
        data={data}
        theadClassName="theadClass"
        trClassName="trClass"
        thClassName="thClass"
      >
        <Column field="key1" />
        <Column field="key2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Header).prop('theadClassName')).toEqual('theadClass');
    expect(wrapper.find(Header).prop('trClassName')).toEqual('trClass');
    expect(wrapper.find(Header).prop('thClassName')).toEqual('thClass');
  });

  it('renders <Body /> component', () => {
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

    const table = (
      <Table data={data}>
        <Column field="key1" />
        <Column field="key2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Body).length).toEqual(1);
  });

  it('passes related classes to <Body /> component', () => {
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

    const table = (
      <Table
        data={data}
        tbodyClassName="tbodyClass"
        trClassName="trClass"
        tdClassName="tdClass"
      >
        <Column field="key1" />
        <Column field="key2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Body).prop('tbodyClassName')).toEqual('tbodyClass');
    expect(wrapper.find(Body).prop('trClassName')).toEqual('trClass');
    expect(wrapper.find(Body).prop('tdClassName')).toEqual('tdClass');
  });

  it('converts children to empty array if not children given.', () => {
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

    const table = (
      <Table data={data} />
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Body).prop('columns')).toBeAn('array');
    expect(wrapper.find(Body).prop('columns').length).toEqual(0);
  });

  it('converts children to array if single <Column /> given.', () => {
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

    const table = (
      <Table data={data}>
        <Column field="key1" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Body).prop('columns')).toBeAn('array');
  });

  it('passes header and size props to <Header> from <Column /> props', () => {
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

    const table = (
      <Table data={data}>
        <Column field="key1" header="Key 1" size={100} />
        <Column field="key2" header="Key 2" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Header).prop('items')).toEqual([
      {
        title: 'Key 1',
        size: 100
      },
      {
        title: 'Key 2',
        size: undefined
      }
    ]);
  });

  it('passes data and columns to <Body /> component', () => {
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

    const table = (
      <Table data={data}>
        <Column field="key1" />
      </Table>
    );

    const wrapper = shallow(table);
    expect(wrapper.find(Body).prop('columns')).toBeAn('array');
    expect(wrapper.find(Body).prop('data')).toEqual(data);
  });
});
