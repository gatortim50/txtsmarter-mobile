import React from 'react'
import { Provider } from 'mobx-react'
import AuthStore from './src/stores/AuthStore'
import SignUpNavigator from './src/navigators/SignUpNavigator'

// add stores here
const stores = {
  AuthStore,
}
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <SignUpNavigator />
      </Provider>
    )
  }
}
