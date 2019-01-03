import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Login from './Login';

class StyledLogin extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Login {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledLogin))``;
