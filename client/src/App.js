import React, {Component} from 'react';
import './App.css';
import { Landing, Home, Add, Edit } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as redux from 'redux'
import { connect } from 'react-redux'
import * as AppActions from './action'

class App extends Component {

  componentDidMount() {
    this.props.actions.loadData();
}

  render() {
    return (
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
          <Route exact path="/edit/:id">
            <Edit dataNilai={this.props.dataNilai} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
      dataNilai: state.dataNilai
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: redux.bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)