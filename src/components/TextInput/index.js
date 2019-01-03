import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import TextInput from './TextInput';

class StyledTextInput extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <TextInput {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledTextInput))``;
