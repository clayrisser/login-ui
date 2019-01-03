import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { View, TextInput } from '~/components';
import { connect } from 'react-redux';

function noop() {}

class Login extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

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
        {}
      </View>
    );
  }
}

export default reduxForm({
  form: 'login'
})(connect(state => ({ form: state.form }))(Login));
