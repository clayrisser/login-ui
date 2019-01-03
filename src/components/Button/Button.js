import React, { Component } from 'react';
import { Button as CarbonButton } from 'carbon-components-react';

export default class Button extends Component {
  render() {
    return <CarbonButton {...this.props} />;
  }
}
