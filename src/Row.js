/* @flow */

import React, { Element, PropTypes } from 'react';

import { cellDataGenerator } from './utils';

import Column from './Column';
import PureCell from './PureCell';

type RowPropsType = {
  data: Object,
  columns: Array<Element<Column>>
};

const Row = (props: RowPropsType): Element<*> => {
  const { data, columns } = props;

  const cells = React.Children.map(
    columns,
    (column: Element<Column>): Element<*> => {
      const cell = column.props.cell || <PureCell data={{}} />;

      return React.cloneElement(cell, {
        data: cellDataGenerator(data, column.props.field)
      });
    }
  );

  return (
    <tr>
      {cells.map((cell: Element<*>, key: number): Element<*> =>
        <td key={key}>
          {cell}
        </td>
      )}
    </tr>
  );
};

Row.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.object.isRequired,
  /* eslint-enable */
  columns: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Row;