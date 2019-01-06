import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import autobind from 'autobind-decorator';
import queryString from 'query-string';
import { Button, Checkbox } from '~/components';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { consentFlow } from '~/actions/flow';

@autobind
class Consent extends Component {
  static propTypes = {
    consentFlow: PropTypes.func.isRequired,
    flow: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  get challenge() {
    return (
      queryString.parse(this.props.router?.location?.search || '').challenge ||
      ''
    );
  }

  get requestedScope() {
    const requestedScope = queryString.parse(
      this.props.router?.location?.search || ''
    ).requested_scope;
    return requestedScope ? requestedScope.split(' ') : [];
  }

  async handleConsent() {
    await this.props.consentFlow(
      this.challenge,
      this.props.form.consent.values
    );
    if (this.props.flow.consent?.redirect) {
      window.location = this.props.flow.consent.redirect;
    }
  }

  renderRequestedScope() {
    return _.map(this.requestedScope, scope => {
      return (
        <Field component={Checkbox} id={scope} labelText={scope} name={scope} />
      );
    });
  }

  render() {
    return (
      <Form>
        {this.renderRequestedScope()}
        <Button onClick={this.handleConsent}>Consent</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'consent'
})(
  connect(
    state => ({
      flow: state.flow,
      form: state.form,
      router: state.router
    }),
    {
      consentFlow
    }
  )(Consent)
);
