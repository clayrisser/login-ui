import PropTypes from 'prop-types';
import React, { Component } from 'react';
import queryString from 'query-string';
import { Field, Form, reduxForm } from 'redux-form';
import { TextInput } from '~/components';
import { connect } from 'react-redux';

function noop() {}

class Consent extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  get challenge() {
    return queryString.parse(this.props.router?.location?.search || '')
      .challenge;
  }

  render() {
    noop(this.props.form.login?.values);
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
      </Form>
    );
  }
}

export default reduxForm({
  form: 'consent'
})(connect(state => ({ form: state.form, router: state.router }))(Consent));
