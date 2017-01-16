/* @flow */

import { Element, PropTypes } from 'react';

type ColumnPropsType = {
  header?: string,
  size?: number | string,
  tdClassName?: string,
  field?: string | Array<string>,
  cell?: Element<*>
};

/* eslint-disable no-unused-vars */
const Column = (props: ColumnPropsType): null => null;
/* eslint-enable*/

Column.propTypes = {
  header: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  tdClassName: PropTypes.string,
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.element
  ]),
  cell: PropTypes.element
};

export default Column;
