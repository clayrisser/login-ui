import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import queryString from 'query-string';
import { Button, TextInput } from '~/components';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginFlow } from '~/actions/flow';

@autobind
class Login extends Component {
  static propTypes = {
    flow: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    loginFlow: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
  };

  get challenge() {
    return queryString.parse(this.props.router?.location?.search || '')
      .challenge;
  }

  async handleLogin() {
    const { username, password } = this.props.form.login?.values || {};
    await this.props.loginFlow(this.challenge, username, password);
    if (this.props.flow.login?.redirect) {
      window.location = this.props.flow.login.redirect;
    }
  }

  render() {
    return (
      <Form>
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
      </Form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(
  connect(
    state => ({
      flow: state.flow,
      form: state.form,
      router: state.router
    }),
    {
      loginFlow
    }
  )(Login)
);
