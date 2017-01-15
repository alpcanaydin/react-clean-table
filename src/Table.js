/* @flow */

import React, { Element, PropTypes } from 'react';
import Header from './Header';
import Body from './Body';
import Column from './Column';

import type { HeaderItemPropsType } from './HeaderItem';

type TablePropsType = {
  data: Array<*>,
  children?: Array<Element<Column>> | Element<Column>
};

const Table = (props: TablePropsType): Element<*> => {
  const { data, children, ...otherProps } = props;
  let columns;

  if (!children) {
    columns = [];
  } else if (!Array.isArray(children)) {
    columns = [children];
  } else {
    columns = children;
  }

  const headerData = columns.map((column: Element<Column>): HeaderItemPropsType => ({
    title: column.props.header,
    size: column.props.size
  }));

  return (
    <table {...otherProps}>
      <Header items={headerData} />
      <Body data={data} columns={columns} />
    </table>
  );
};

Table.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.array.isRequired,
  /* eslint-enable */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Table;
