import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import queryString from 'query-string';
import { Field, Form, reduxForm } from 'redux-form';
import { Button, TextInput } from '~/components';
import { connect } from 'react-redux';
import { consentFlow } from '~/actions/flow';

@autobind
class Consent extends Component {
  static propTypes = {
    consentFlow: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  get challenge() {
    return queryString.parse(this.props.router?.location?.search || '')
      .challenge;
  }

  async handleConsent() {
    await this.props.consentFlow(
      this.challenge,
      this.props.form.consent.values
    );
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
        <Button onClick={this.handleConsent}>Login</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'consent'
})(
  connect(
    state => ({ form: state.form, router: state.router }),
    {
      consentFlow
    }
  )(Consent)
);
