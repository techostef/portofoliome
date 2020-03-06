import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import "./assets/css/tailwind.css"

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);