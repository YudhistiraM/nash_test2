
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Landing, Home } from './components';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);