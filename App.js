import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import StackNavScreen from './components/StackNav';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import configureStore from './components/redux/user/Store';

Amplify.configure(awsconfig);

const store = configureStore;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavScreen screenProps={{authenticate: this.authenticate}} />
        </NavigationContainer>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
