import React, { Component } from 'react';
import { Switch, Route } from 'react-router-defer';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';
import Skill from './Skill';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/skill" component={Skill} />
        <Route path="/skill/:skill" component={Skill} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
