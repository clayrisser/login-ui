import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Consent from './Consent';

class StyledConsent extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Consent {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledConsent))``;
