/* @flow */

import React, { Element, PropTypes } from 'react';
import Header from './Header';
import Body from './Body';
import Column from './Column';

import type { HeaderItemPropsType } from './HeaderItem';

type TablePropsType = {
  data: Array<*>,
  theadClassName?: string,
  tbodyClassName?: string,
  trClassName?: string,
  tdClassName?: string,
  thClassName?: string,
  children?: Array<Element<Column>> | Element<Column>
};

const Table = (props: TablePropsType): Element<*> => {
  const {
    data,
    theadClassName,
    tbodyClassName,
    trClassName,
    tdClassName,
    thClassName,
    children,
    ...otherProps
  } = props;
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
      <Header
        items={headerData}
        theadClassName={theadClassName}
        trClassName={trClassName}
        thClassName={thClassName}
      />
      <Body
        data={data}
        columns={columns}
        tbodyClassName={tbodyClassName}
        trClassName={trClassName}
        tdClassName={tdClassName}
      />
    </table>
  );
};

Table.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.array.isRequired,
  /* eslint-enable */
  theadClassName: PropTypes.string,
  tbodyClassName: PropTypes.string,
  trClassName: PropTypes.string,
  tdClassName: PropTypes.string,
  thClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Table;
