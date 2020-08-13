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

//import {userReducer} from './components/redux/user/Reducers';

Amplify.configure(awsconfig);

// console.log({store});
// console.log({configureStore});
// console.log('store configured');

const store = configureStore;

class App extends React.Component {
  // state = {isAuthenticated: false};
  // authenticate = (isAuthenticated) => {
  // this.setState({isAuthenticated});
  //console.log('is authenticated');
  //};
  render() {
    // if (this.state.isAuthenticated)
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavScreen screenProps={{authenticate: this.authenticate}} />
        </NavigationContainer>
      </Provider>
    );
    //console.log('store was read');
  }
}
const styles = StyleSheet.create({});

export default App;
