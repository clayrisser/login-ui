import React, { Component } from 'react';
import { View } from '~/components';

export default class Header extends Component {
  render() {
    return <View {...this.props}>header</View>;
  }
}
