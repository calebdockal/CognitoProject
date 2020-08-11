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
import {connect} from 'react-redux';
import {userReducer} from './components/redux/user/Reducers';

Amplify.configure(awsconfig);

const store = configureStore();
console.log({store});
console.log({configureStore});
console.log('store configured');

class App extends React.Component {
  // state = {isAuthenticated: false};
  // authenticate = (isAuthenticated) => {
  // this.setState({isAuthenticated});
  //console.log('is authenticated');
  //};
  render() {
    // if (this.state.isAuthenticated)
    return (
      <NavigationContainer>
        <StackNavScreen screenProps={{authenticate: this.authenticate}} />
      </NavigationContainer>
    );
    console.log('store was read');
  }
}
const styles = StyleSheet.create({});

export default App;
