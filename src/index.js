import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import './styles/main.scss'
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
