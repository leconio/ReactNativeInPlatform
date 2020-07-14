/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {storeWithInitialState} from './common/store/Store';
import {AppWithNavigationState} from './common/navigator/AppNavigator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = storeWithInitialState({});
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
