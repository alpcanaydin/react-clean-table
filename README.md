# react-clean-table

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls] [![David][david-badge]][david]

**react-clean-table** is an easy to configure, full customizable table component for React.

* [Installation](#installation)
* [Quick Example](#quick-example)
* [Usage](#usage)
* [Contributing](#contributing)


## Installation

### Using NPM

	npm install react-clean-table --save


### Using Yarn

	yarn add react-clean-table


### Using CDN
If you don't use any module bundler then you can just import **react-clean-table** to your project via `<script>` tag. You can use it as `ReactCleanTable` on your javascript.

	<script src="https://unpkg.com/react-clean-table/umd/react-clean-table.min.js"></script>


## Quick Example

Simple usage of **react-clean-table** is like this:


```jsx
import React from 'react';
import { Table, Column } from 'react-clean-table';

const data = [
  {
    id: 1,
    firstName: 'Tillman',
    lastName: 'Franklin',
    company: 'Quarx',
    username: 'tillmanfranklin',
    email: 'tillman@quarx.me'
  },
  {
    id: 2,
    firstName: 'Maritza',
    lastName: 'Gamble',
    company: 'Rooforia',
    username: 'maritzagamble',
    email: 'maritza@rooforia.com'
  }
];

const FullNameCell = ({ data }) => <span>{data[0]} {data[1]}</span>;
const EmailCell = ({ data }) => <a href={`mailto:${data}`}>{data}</a>;

const Demo = () => (
  <Table
    className="table"
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
  </Table>
);

export default Demo;
```


## Usage


### Styling
**react-clean-table** has no styling dependency. Therefore, if you need customize table styling then you can use `className` props for each element.

```jsx
<Table
  data={data}
  className="table table-primary"
  theadClassName=""
  tbodyClassName=""
  trClassName=""
  tdClassName=""
  thClassName=""
/>
  {/* columns */}
</Table>
```

### Table Data
You have to pass **an array of objects** to `<Table />` component to make it work. These objects can be nested and have any data type.

```jsx
const data = [
  {
    key1: 'value 1',
    key2: [1, 2, 3],
    key3: {
    	key4: true,
      key5: {
        key6: 'value 2'
      }
    }
  }
];

<Table data={data}>
	{/* columns */}
</Table>
```

### Columns
You have to specify each column that you want to show with `<Column />` component. For example, you can create a table for this data like this:

```js
const data = [
  {
    id: 1,
    firstName: 'Alpcan',
    lastName: 'Aydın',
    email: 'alpcan@alpcanaydin.com'
  }
];
```

```jsx
<Table data={data} />
  <Column
    header="ID"
    field="id"
  />
  <Column
    header="First Name"
    field="firstName"
  />
  <Column
    header="Last Name"
    field="lastName"
  />
  <Column
    header="Email"
    field="email"
  />
</Table>
```

All column cells are customizable with components. For examle let's pass a custom `<EmailCell />` to email column.

```jsx
const EmailCell = ({ data }) => <a href={`mailto:${data}`}>{data}</a>;

<Table data={data} />
  <Column
    header="ID"
    field="id"
  />
  <Column
    header="First Name"
    field="firstName"
  />
  <Column
    header="Last Name"
    field="lastName"
  />
  <Column
    header="Email"
    field="email"
    cell={<EmailCell />}
  />
</Table>
```

You can also pass props to your custom cell component.

```jsx
const EmailCell = ({ data, showAs }) => <a href={`mailto:${data}`}>{showAs}</a>;

<Table data={data} />
  <Column
    header="ID"
    field="id"
  />
  <Column
    header="First Name"
    field="firstName"
  />
  <Column
    header="Last Name"
    field="lastName"
  />
  <Column
    header="Email"
    field="email"
    cell={<EmailCell showAs="E-mail" />}
  />
</Table>
```

What if you want to use multiple field from your data in a cell? No problem, just assign an array to field prop.

```jsx
const EmailCell = ({ data, showAs }) => <a href={`mailto:${data}`}>{showAs}</a>;

const FullNameCell = ({ data }) => <span>{data[0]} {data[1]}</span>;

<Table data={data} />
  <Column
    header="ID"
    field="id"
  />
  <Column
    header="Full Name"
    field={['firstName', 'lastName']}
    cell={<FullNameCell />}
  />
  <Column
    header="Email"
    field="email"
    cell={<EmailCell showAs="E-mail" />}
  />
</Table>
```

### Column Styling
If you want to add a className to speficied `<Column />` you can also use `tdClassName` prop in `<Column />` components. Both `tdClassName` props will be merged.

```jsx
const EmailCell = ({ data, showAs }) => <a href={`mailto:${data}`}>{showAs}</a>;

const FullNameCell = ({ data }) => <span>{data[0]} {data[1]}</span>;

<Table
  data={data}
  tdClassName="generic-td-class"
/>
  <Column
    header="ID"
    field="id"
    tdClassName="speficied-td-class"
  />
  <Column
    header="Full Name"
    field={['firstName', 'lastName']}
    cell={<FullNameCell />}
  />
  <Column
    header="Email"
    field="email"
    cell={<EmailCell showAs="E-mail" />}
  />
</Table>

/*
Output for ID td:
<td class="generic-td-class speficied-td-class">cell</td>
*/
```


### Data Accessing

You can use **dot notation** in order to access to spesific data.

```jsx
const data = [
  {
    key1: 'value 1',
    key2: ['x', 'y', 'z'],
    key3: {
    	key4: true,
        key5: {
        	key6: 'value 2',
            key7: ['a', 'b', 'c']
        }
    }
  }
];

const field = 'key1';
// or
const field = 'key2.2';
// or
const field = 'key3.key5.key6';
// or
const field = 'key3.key5.key7.1';

<Table data={data}>
  <Column
  	header="Simple Header"
    field={field}
  />
</Table>
```

### Column Size

If you want to specify a column size then you can use `size` prop in your `<Column />` components.

```js
const data = [
  {
    id: 1,
    firstName: 'Alpcan',
    lastName: 'Aydın',
    email: 'alpcan@alpcanaydin.com'
  }
];
```

```jsx
<Table data={data} />
  <Column
    header="ID"
    field="id"
    size={10}
  />
  <Column
    header="First Name"
    field="firstName"
    size="100px"
  />
  <Column
    header="Last Name"
    field="lastName"
    size="50"
  />
  <Column
    header="Email"
    field="email"
    size="45%"
  />
</Table>
```


## Contributing

To suggest a feature, please open an issue if does not already exist. If you want to develop some feature please follow these steps:

* Fork this repo.
* Make sure `yarn` installed in your computer.
* Implement your feature. (you can use `yarn start` command to have hot-reload enabled dev server.)
* Check your code via `yarn run lint`
* Add tests to cover your code.
* Run all tests to ensure that they pass via `yarn run test`
* Check code coverage via `yarn run test:coverage`
* Send a pull request to this repo.


[build-badge]: https://img.shields.io/travis/alpcanaydin/react-clean-table/master.png
[build]: https://travis-ci.org/alpcanaydin/react-clean-table

[npm-badge]: https://img.shields.io/npm/v/react-clean-table.png
[npm]: https://www.npmjs.org/package/react-clean-table

[coveralls-badge]: https://img.shields.io/coveralls/alpcanaydin/react-clean-table/master.png
[coveralls]: https://coveralls.io/github/alpcanaydin/react-clean-table

[david-badge]: https://img.shields.io/david/alpcanaydin/react-clean-table.svg
[david]: https://github.com/alpcanaydin/react-clean-table

