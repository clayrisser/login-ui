import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Link } from '@reactant/react-router';
import { View } from '~/components';

@autobind
export default class Home extends Component {
  render() {
    return (
      <View>
        <Link to="/skill/addition">skill</Link>
      </View>
    );
  }
}
