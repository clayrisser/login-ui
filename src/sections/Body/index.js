import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Body from './Body';

class StyledBody extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Body {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledBody))``;
