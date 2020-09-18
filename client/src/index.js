import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Landing, Home, Add, Edit } from './components';
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
      <Route exact path="/add">
        <Add />
      </Route>
      <Route exact path="/edit">
        <Edit />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);