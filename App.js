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
class App extends React.Component {
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

const mapStateToProps = (state) => {
  return {
    state: state.userReducer,
  };
  console.log('state mapped');
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (user) => {
      dispatch(userReducer());
      console.log('dispatch went through');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
console.log('state connected');
