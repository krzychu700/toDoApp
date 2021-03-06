import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from "redux-logger";
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
  applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
