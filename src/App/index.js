import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import App from './App';

class StyledApp extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <App {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledApp))``;
