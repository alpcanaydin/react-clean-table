/* @flow */

import React, { Element, PropTypes } from 'react';

type PureCellPropsType = {
  data?: any
};

const PureCell = (props: PureCellPropsType): Element<*> => {
  const { data } = props;

  if (typeof data === 'string' || typeof data === 'number') {
    return <span>{data}</span>;
  }

  return <code>{JSON.stringify(data, null, 2)}</code>;
};

PureCell.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.any
  /* eslint-enable */
};

export default PureCell;
