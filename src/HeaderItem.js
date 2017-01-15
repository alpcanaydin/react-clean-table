/* @flow */

import React, { Element, PropTypes } from 'react';

export type HeaderItemPropsType = {
  title?: string,
  size?: string | number,
  thClassName?: string
};

const HeaderItem = (props: HeaderItemPropsType): Element<*> => {
  const { size, title, thClassName } = props;
  const style = {};

  if (size) {
    style.width = typeof size === 'number' ? `${size}px` : size;
  }

  return <th style={style} className={thClassName}>{title}</th>;
};

HeaderItem.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  thClassName: PropTypes.string
};

export default HeaderItem;
