import CarbonTextInput from 'carbon-components-react/es/components/TextInput';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

@autobind
export default class TextInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    input: PropTypes.object,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
  };

  static defaultProps = {
    id: '',
    labelText: '',
    onChange: f => f,
    value: null,
    input: {
      onChange: f => f,
      value: ''
    }
  };

  handleChange(e) {
    const { value } = e.target;
    this.props.onChange(value);
    this.props.input.onChange(value);
  }

  render() {
    return (
      <CarbonTextInput
        {...this.props}
        value={this.props.value || this.props.input.value}
        onChange={this.handleChange}
      />
    );
  }
}
