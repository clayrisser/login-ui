import CarbonCheckbox from 'carbon-components-react/es/components/Checkbox';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import autobind from 'autobind-decorator';
import View from '../View';

@autobind
export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    id: PropTypes.string,
    input: PropTypes.object,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    checked: null,
    id: '',
    labelText: '',
    onChange: f => f,
    onClick: f => f,
    input: {
      onChange: f => f,
      value: null
    }
  };

  state = {
    checked: false
  };

  get checked() {
    return !_.isNil(this.props.checked)
      ? this.props.checked
      : this.state.checked;
  }

  handleClick(e) {
    // fixes bug that triggers handler twice
    if (_.isFunction(e._dispatchListeners)) {
      const checked = !this.checked;
      this.props.onClick(e);
      this.setState({ checked });
      this.props.onChange(checked);
      this.props.input.onChange(checked);
    }
  }

  render() {
    const props = { ...this.props };
    delete props.onChange;
    return (
      <View onClick={this.handleClick}>
        <CarbonCheckbox {...props} checked={this.checked} />
      </View>
    );
  }
}
