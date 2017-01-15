/* @flow */

import React, { Element } from 'react';

type SocialLinkCellPropsType = {
  type: 'github' | 'twitter',
  username: string
};

const SocialLinkCell = (props: SocialLinkCellPropsType): Element<*> => {
  const { username, type } = props;
  let link;

  if (type === 'github') {
    link = `http://github.com/${username}`;
  } else {
    link = `http://twitter.com/${username}`;
  }

  return (
    <a
      href={link}
      className="button is-small"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: '5px' }}
    >
      <span className="icon">
        <i className={`fa fa-${type}`} />
      </span>
      <span>{props.username}</span>
    </a>
  );
};

export default SocialLinkCell;
