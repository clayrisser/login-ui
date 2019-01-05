import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import queryString from 'query-string';
import { Button, View, TextInput } from '~/components';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '~/actions/auth';

function noop() {}

@autobind
class Login extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
  };

  get challenge() {
    return queryString.parse(this.props.router?.location?.search || '')
      .challenge;
  }

  async handleLogin() {
    const { username, password } = this.props.form.login.values;
    await this.props.login(this.challenge, username, password);
  }

  render() {
    noop(this.props.form.login?.values);
    return (
      <View>
        <Field
          component={TextInput}
          id="username"
          labelText="Username"
          name="username"
        />
        <Field
          component={TextInput}
          id="password"
          labelText="Password"
          name="password"
          type="password"
        />
        <Button onClick={this.handleLogin}>Login</Button>
      </View>
    );
  }
}

export default reduxForm({
  form: 'login'
})(
  connect(
    state => ({ form: state.form, router: state.router }),
    {
      login
    }
  )(Login)
);
