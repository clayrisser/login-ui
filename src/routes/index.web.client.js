import React, { Component } from 'react';
import { Switch, Route } from 'react-router-defer';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => import('./Home')} />
        <Route path="/login" component={() => import('./Login')} />
        <Route path="/register" component={() => import('./Register')} />
        <Route path="/skill" component={() => import('./Skill')} />
        <Route path="/skill/:skill" component={() => import('./Skill')} />
        <Route component={() => import('./NotFound')} />
      </Switch>
    );
  }
}
