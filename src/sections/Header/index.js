import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Header from './Header';

class StyledHeader extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Header {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledHeader))``;
