import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import AuthStore from './src/stores/AuthStore';
import RootNavigator from './src/navigators/RootNavigator';

// add stores here
const stores = {
  AuthStore
};
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <RootNavigator />
      </Provider>
    );
  }
}
