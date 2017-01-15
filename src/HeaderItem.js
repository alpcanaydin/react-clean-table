/* @flow */

import React, { Element, PropTypes } from 'react';

export type HeaderItemPropsType = {
  title: string,
  size?: string | number
};

const HeaderItem = (props: HeaderItemPropsType): Element<*> => {
  const { size, title } = props;
  const style = {};

  if (size) {
    style.width = typeof size === 'number' ? `${size}px` : size;
  }

  return <th style={style}>{title}</th>;
};

HeaderItem.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default HeaderItem;
