import React, { Component } from 'react';
import { Switch, Route } from 'react-router-defer';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => import('./Login')} />
        <Route path="/consent" component={() => import('./Consent')} />
        <Route component={() => import('./NotFound')} />
      </Switch>
    );
  }
}
