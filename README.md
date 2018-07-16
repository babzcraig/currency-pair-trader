# Currency Pair Trader
This app allows user execute trades against realtime exchange rates of USD to BTC. User has a prefunded account of $156.12 and can make trades of any amount up to his current account balance.

## To run
To run the app, clone the repo then run
```
$ npm install
```

After modules have installed you can run the app in development mode with
```
$ npm start
```

This will run the app using webpack dev-server in development mode. It's set up with hot reloading so that a full browser reload is only made for those changes requiring it. We also include plug-ins for Babel (so we have access to ES6 and ES7 features - such as aync/await) and SCSS for styling.

## To build
The development build is not optimized. To create an optimized production build with minification, caching etc, run
```
$ npm build
```

This will output a `build` folder containing the production ready app which can be deployed.

## To test
Tests can be run using
```
$ npm test
```

This will run unit tests for the components in the app.

**In the interest of time, only a few components have been tested.

## Notes
- The app fetches the last price at intervals. This interval is stored in a constant called `POLLING_INTERVAL_IN_MS`. If there is an `amount to buy` value in the form field, the app will also adjust the BTC quote field accordingly. It will also show a warning to the user that the price has changed, alerting them so they can confirm before making a trade. This takes care of the use case where a user might walk away from the app and return after a prolonged interval during which time the exchange rates might have changes due to the  volatile nature of bitcoin marketplace.
- Our babel presets are stored in the `.babelrc` file. For this project we are using "env", "react" and "stage-2" presets. This will give us the fliexibility to use ES6 and 7 features such as destructuring, spread operators and async/await which helps keep code shorter and more readable.

## App Structure
Entry point into the app is the `index.js` file. The rest of the files are kept in folders.
- The `actions` folder contains our redux actions. These dispatch actions to our reducers.
- The `components` folder holds all of our components. At the root of this is the `App` component. This is the base component.
Components are further broken down into `containers` - Smart components which handle data though not always handling state and `screens` Dumb containers which simply present the data to the user and are almost always functional components. The folders are named accordingly.
- The `constants` folder exports our action types and other app constants such as the time-delay for fetching updated data
- The `reducers` folder holds our reducers. It uses the combine reducers function provided by redux to combine the various reducers. We have a reducer that handles user data and one for ticker data. Both files are named accordingly.
- The `store` is our redux store. This file pulls in the reducers and applies the middleware we will be using. In this project we are using the `thunk` middleware which allows us write async actions. This is especially useful when actions need to carry out asynchronous operations such as fetching the current BTC rate.
- The `styles` folder holds the styling for the app. As this is a one sceen app, this is simply an `index.scss` file but in a larger app, there would be files for each reasonably large component as well as files for base styles, variables and so on.
- The `utils` folder  holds our utility functions. This allows components that require a common functions to share them. It also keeps code neat by storing these functions away behind the scenes.

