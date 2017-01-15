/* @flow */

import React, { Element, PropTypes } from 'react';
import HeaderItem from './HeaderItem';

import type { HeaderItemPropsType } from './HeaderItem';

export type HeaderType = Array<HeaderItemPropsType>;
export type HeaderPropsType = {
  items: HeaderType,
  theadClassName?: string,
  trClassName?: string,
  thClassName?: string
};

const Header = (props: HeaderPropsType): Element<*> => {
  const {
    items,
    theadClassName,
    trClassName,
    thClassName
  } = props;

  return (
    <thead className={theadClassName}>
      <tr className={trClassName}>
        {items.map((item: HeaderItemPropsType, key: number): Element<*> =>
          <HeaderItem
            key={key}
            title={item.title}
            size={item.size}
            thClassName={thClassName}
          />
        ) }
      </tr>
    </thead>
  );
};

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  theadClassName: PropTypes.string,
  trClassName: PropTypes.string,
  thClassName: PropTypes.string
};

export default Header;
