import React from 'react';
import ReactDOM from 'react-dom';
import './resetAndNormalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css';
import App from './App';
import store from './app/store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AlertTemplate from 'react-alert-template-mui'
import { Provider as AlertProvider } from 'react-alert'



ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <Provider store={store}>
        <App />
      </Provider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
