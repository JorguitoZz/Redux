import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { initialState, reducer } from './GlobalState';
import { Provider } from 'react-redux';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento en tu aplicación, puedes usar la función reportWebVitals
reportWebVitals();
