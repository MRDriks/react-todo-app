import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);