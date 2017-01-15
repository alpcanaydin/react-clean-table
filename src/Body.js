/* @flow */

import React, { Element, PropTypes } from 'react';

import Row from './Row';
import Column from './Column';

type BodyPropsType = {
  data: Array<Object>,
  columns: Array<Element<Column>>,
  tbodyClassName?: string,
  trClassName?: string,
  tdClassName?: string
};

const Body = (props: BodyPropsType): Element<*> => {
  const {
    data,
    columns,
    tbodyClassName,
    trClassName,
    tdClassName
  } = props;

  return (
    <tbody className={tbodyClassName}>
      {data.map((item: Object, key: number): Element<*> => (
        <Row
          key={key}
          data={item}
          columns={columns}
          trClassName={trClassName}
          tdClassName={tdClassName}
        />
      ))}
    </tbody>
  );
};

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.element).isRequired,
  tbodyClassName: PropTypes.string,
  trClassName: PropTypes.string,
  tdClassName: PropTypes.string
};

export default Body;
