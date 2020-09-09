import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import GlobalStyle from './styles/globalStyles';
import configureStore from "./store";
import { getData } from './actions';
import Home from './components/Home';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Home />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
