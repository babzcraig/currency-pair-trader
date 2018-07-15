# Currency Pair Trader
This app allows user execute trades against realtime exchange rates of USD to BTC. User has a prefunded account of $156.12 and can make trades of any amount up to his current account balance.

## To run
To run the app, clone the app then run
```
$ npm install
```

After modules have installed you can run the app in development mode with
```
$ npm start
```

This will run the app using webpack dev-server in production mode. It's set up with hot reloading so that a full browser reload is only mad for those changes requiring it.

## To build
To create an optimized production build, run
```
$ npm build
```

This will output a `build` folder containing the production ready app which can be deployed.

## To test
Tests can be run using
```
$ npm test
```

This will run unit tests for all the components in the app.
