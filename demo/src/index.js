/* flow */

import React, { Element } from 'react';
import { render } from 'react-dom';

import { Table, Column } from '../../src';

import SocialLinkCell from './SocialLinkCell';

const data = require('./data.json');

const LinksCell = (props: { data: string }): Element<*> => (
  <p className="control">
    <SocialLinkCell type="github" username={props.data} />
    <SocialLinkCell type="twitter" username={props.data} />
  </p>
);

const FullNameCell = (props: { data: Array<string> }): Element<*> => (
  <span>{props.data[0]} {props.data[1]}</span>
);

const EmailCell = (props: { data: string }): Element<*> => (
  <a href={`mailto:${props.data}`}>{props.data}</a>
);

const Demo = (): Element<*> => (
  <div className="section">
    <div className="container">
      <h1 className="title">React Clean Table</h1>

      <Table
        className="table is-bordered is-striped is-narrow is-vertical-middle"
        data={data}
      >
        <Column
          header="ID"
          field="id"
        />
        <Column
          header="Person"
          size="30%"
          field={['firstName', 'lastName']}
          cell={<FullNameCell />}
        />
        <Column
          header="E-mail"
          field="email"
          cell={<EmailCell />}
        />
        <Column
          header="Company"
          field="company"
        />
        <Column
          header="Github"
          field="username"
          cell={<LinksCell />}
        />
      </Table>
    </div>
  </div>
);

render(<Demo />, document.querySelector('#demo'));
