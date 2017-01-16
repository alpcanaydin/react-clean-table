/* @flow */

import React, { Element, PropTypes } from 'react';

import { cellDataGenerator, classNameMerge } from './utils';

import Column from './Column';
import PureCell from './PureCell';

type RowPropsType = {
  data: Object,
  columns: Array<Element<Column>>,
  trClassName?: string,
  tdClassName?: string
};

const Row = (props: RowPropsType): Element<*> => {
  const {
    data,
    columns,
    trClassName,
    tdClassName
  } = props;

  const mappedColumns = React.Children.map(
    columns,
    (column: Element<Column>): Element<*> => {
      const cell = React.cloneElement(column.props.cell || <PureCell />, {
        data: cellDataGenerator(data, column.props.field)
      });

      return (
        <td className={classNameMerge(tdClassName, column.props.tdClassName)}>
          {cell}
        </td>
      );
    }
  );

  return (
    <tr className={trClassName}>
      {mappedColumns.map((column: Element<*>): Element<*> => column)}
    </tr>
  );
};

Row.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.object.isRequired,
  /* eslint-enable */
  columns: PropTypes.arrayOf(PropTypes.element).isRequired,
  trClassName: PropTypes.string,
  tdClassName: PropTypes.string
};

export default Row;
