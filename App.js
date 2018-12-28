import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import AuthStore from './src/stores/AuthStore'
import Application from './src/components/Application'

// add stores here
const stores = {
  AuthStore,
}

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Application/>
      </Provider>
    )
  }
}
