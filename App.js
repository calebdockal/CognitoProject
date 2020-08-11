import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavScreen from './components/StackNav';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {Provider} from 'react-redux';
import configureStore from './components/redux/user/Store';

Amplify.configure(awsconfig);
const store = configureStore();
export default class App extends React.Component {
  state = {isAuthenticated: false};
  authenticate = (isAuthenticated) => {
    this.setState({isAuthenticated});
  };
  render() {
    // if (this.state.isAuthenticated)
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
