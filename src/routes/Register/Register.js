import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, TextInput } from '~/components';
import { connect } from 'react-redux';

function noop() {}

class Register extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

  render() {
    noop(this.props.form.register?.values);
    return (
      <View>
        <Field
          component={TextInput}
          id="first-name"
          labelText="First Name"
          name="firstName"
        />
        <Field
          component={TextInput}
          id="last-name"
          labelText="Last Name"
          name="lastName"
        />
        <Field
          component={TextInput}
          id="username"
          labelText="Username"
          name="username"
        />
        <Field
          component={TextInput}
          id="email"
          labelText="Email"
          name="email"
        />
        <Field
          component={TextInput}
          id="password"
          labelText="Password"
          name="password"
          type="password"
        />
        <Field
          component={TextInput}
          id="confirm-password"
          labelText="Confirm Password"
          name="confirmPassword"
          type="password"
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'register'
})(connect(state => ({ form: state.form }))(Register));
