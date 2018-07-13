import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from './components/App';
import {Provider} from "react-redux";
import store from './store';
// We import our entry point style - file index.scss
import './styles/index.scss'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById("root"));