import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from '~/components';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return <View style={{ padding: '20px' }}>{this.props.children}</View>;
  }
}
