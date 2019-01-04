import React, { Component } from 'react';
import { Switch, Route } from 'react-router-defer';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
