import React, { Component } from 'react';
import CarbonButton from 'carbon-components-react/es/components/Button';

export default class Button extends Component {
  render() {
    return <CarbonButton {...this.props} />;
  }
}
