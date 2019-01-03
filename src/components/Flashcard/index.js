import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Flashcard from './Flashcard';

class StyledFlashcard extends Component {
  get style() {
    return {
      ...this.props.style
    };
  }

  render() {
    return <Flashcard {...this.props} style={this.style} />;
  }
}

export default styled(withTheme(StyledFlashcard))`
  box-shadow: 0px 0px 10px 0px #000;
  max-width: 600px;
  padding: 20px;
`;
