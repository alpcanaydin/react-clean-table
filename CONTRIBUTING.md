## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.
[Yarn](https://yarnpkg.com) must be installed.

## Installation

- Running `yarn` in the components's root directory will install everything you need for development.

## Demo Development Server

- `yarn start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Running Tests

- `yarn test` will run the tests once.

- `yarn run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `yarn run test:watch` will run the tests on every change.

- `yarn run lint` will run the **eslint** and **flow** to check syntax.

## Building

- `yarn run build` will build the component for publishing to npm and also bundle the demo app.

- `yarn run clean` will delete built resources.
