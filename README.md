## Cryptocurrency
This project allows you to list and view cryptocurrencies

## Requirements

- node (>= 12.13.1)
- typescript (>= 4.3.4)

## Architecture

The application uses Redux to implement state management where the react-redux library is used. In addition, Redux Saga is used to handle the API calls.
It has:
- Store: It is where the application states are stored
- Reducer: It is in charge of updating the store through actions.
- Actions: They are dispatched from anywhere in the application to invoke the Saga or Reducer directly.
- Saga: It is an effect that invokes an API call.

In the application, 3 domains were identified: Coin, Market and Exchanges. For each domain, a grouping was made at the component and logic level.

## Directory structure

- public (Contains public files)
- src (Contains source code)
 - components (Contains the application components)
 - constants (Contains constants)
 - containers(Contains the container components)
 - extends (Contains the application-level extensions)
 - factory (Contains the files that generate bogus data for unit tests)
 - helpers (Contains helpers)
 - layouts (Contains layours)
 - models (Contains the models for each domain)
 - services (contains the services)
 - store (Contains the domain-segmented Redux implementation.)
 - styles (Contains application styles)
 - themes (contains the application themes)
 - utils (contains utils)
- tests (Contains unit tests)

## How to run

### Without Docker

- `npm i`
- `npm start`
- `Open the Browser with the url http://localhost:3000` and you will be ready to start

### With Docker
- `docker-compose up`
- `Open the Browser with the url http://localhost:3000` and you will be ready to start

## Available Scripts

### `npm start`

Runs the app in the development mode [http://localhost:3000](http://localhost:3000)

### `npm run build`

Generate build of application

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run test:watch`

Launches the test runner in the interactive watch mode.<br>
### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run styleguidist`

View component documentation<br>
