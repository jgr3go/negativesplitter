import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
