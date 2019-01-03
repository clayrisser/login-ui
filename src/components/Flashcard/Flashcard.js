import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Button as CarbonButton } from 'carbon-components-react';
import View from '../View';
import TextInput from '../TextInput';

@autobind
export default class Flashcard extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    correct: PropTypes.number,
    label: PropTypes.string,
    onNext: PropTypes.func,
    style: PropTypes.object.isRequired
  };

  static defaultProps = {
    correct: 0,
    label: 'Next',
    onNext: f => f
  };

  state = {
    answer: ''
  };

  handleClick() {
    this.props.onNext(this.state.answer);
  }

  render() {
    noop(this.props.correct);
    return (
      <View className={this.props.className} style={this.props.style}>
        {this.props.children}
        <TextInput
          value={this.state.answer}
          onChange={answer => this.setState({ answer })}
        />
        <CarbonButton onClick={this.handleClick}>
          {this.props.label}
        </CarbonButton>
      </View>
    );
  }
}

function noop() {}
