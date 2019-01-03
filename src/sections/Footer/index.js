import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Footer from './Footer';

class StyledFooter extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Footer {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledFooter))``;
