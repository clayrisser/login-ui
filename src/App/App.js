import React, { Component } from 'react';
import Routes from '~/routes';
import { Body, Footer, Header } from '~/sections';
import { View } from '~/components';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Body>
          <Routes />
        </Body>
        <Footer />
      </View>
    );
  }
}
