import React, { Component } from 'react';
import { Switch, Route } from 'react-router-defer';
import Consent from './Consent';
import Login from './Login';
import NotFound from './NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/consent" component={Consent} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
