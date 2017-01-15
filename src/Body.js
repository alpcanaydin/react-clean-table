/* @flow */

import React, { Element, PropTypes } from 'react';

import Row from './Row';
import Column from './Column';

type BodyPropsType = {
  data: Array<Object>,
  columns: Array<Element<Column>>
};

const Body = (props: BodyPropsType): Element<*> => {
  const { data, columns } = props;

  return (
    <tbody>
      {data.map((item: Object, key: number): Element<*> => (
        <Row
          key={key}
          data={item}
          columns={columns}
        />
      ))}
    </tbody>
  );
};

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Body;
