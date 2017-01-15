/* @flow */

import { Element, PropTypes } from 'react';

type ColumnPropsType = {
  header?: string,
  field?: string | Array<string>,
  cell?: Element<*>
};

/* eslint-disable no-unused-vars */
const Column = (props: ColumnPropsType): null => null;
/* eslint-enable*/

Column.propTypes = {
  header: PropTypes.string,
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.element
  ])
};

export default Column;
