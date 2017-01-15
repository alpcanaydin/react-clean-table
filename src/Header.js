/* @flow */

import React, { Element, PropTypes } from 'react';
import HeaderItem from './HeaderItem';

import type { HeaderItemPropsType } from './HeaderItem';

export type HeaderType = Array<HeaderItemPropsType>;
export type HeaderPropsType = {
  items: HeaderType
};

const Header = (props: HeaderPropsType): Element<*> => {
  const { items } = props;

  return (
    <thead>
      <tr>
        {items.map((item: HeaderItemPropsType, key: number): Element<*> =>
          <HeaderItem
            key={key}
            title={item.title}
            size={item.size}
          />
        ) }
      </tr>
    </thead>
  );
};

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })).isRequired
};

export default Header;
