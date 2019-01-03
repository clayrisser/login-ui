import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Register from './Register';

class StyledRegister extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Register {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledRegister))``;
