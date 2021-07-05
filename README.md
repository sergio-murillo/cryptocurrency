## Advanced React Redux exercise

## Requirements
You need to have `node`and `npm`installed in your computer.

## How to install

- `git clone git@github.com:reactjs-academy/advanced-react-redux-exercise.git`
- `cd advanced-react-redux-exercise`
- `npm i`
- `npm start`
- `Open the Browser with the url http://localhost:3000` and you will be ready to start


## Exercise

1. Create a logger middleware to log in the console every action that is dispatched

2. Checkout branch 01_solution_logger_middleware, in this branch there is an action in UsersContainer that dispatches a promise, it'll help you test this question. Create a promise middleware to teach the store's dispatch how to understand promises.

3. Move the api call in the fetch method in  /containers/UsersContainer.jsx to a fetchUser action creator in /actions/users.js

4. Refactor the middleware so it implements a middleware chain

5. Refactor the configureStore.dev.js to use the logger-middleware and promise-middleware from npm instead of the addLoggerMiddleware and addPromiseSupportToDispatch that you've created.

6. Using thunks, add loading indicators to the fetchUser action creator in /actions/users.js.

7. Abstract the logic from the action creators in /actions/users.js to the redux-api-middleware (https://www.npmjs.com/package/redux-api-middleware). Add selectors for the redux store.

8. Instead of the redux-api-middleware use a custom api middleware. Hint, you need to fix just two files: selectors/users.js and actions/users.js
