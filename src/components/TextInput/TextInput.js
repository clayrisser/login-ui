import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput as CarbonTextInput } from 'carbon-components-react';
import autobind from 'autobind-decorator';

@autobind
export default class TextInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    input: PropTypes.object
  };

  static defaultProps = {
    id: '',
    labelText: '',
    onChange: f => f,
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
