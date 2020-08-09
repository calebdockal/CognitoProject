import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './SignUp';
import SignIn from './SignIn';
import BottomTabNavigator from './TabNavigator';
import Profile from './Profile';

const StackNav = createStackNavigator();

const StackNavScreen = ({navigation}) => (
  <StackNav.Navigator headerMode={'none'}>
    <StackNav.Screen name="TabNavigator" component={BottomTabNavigator} />
    <StackNav.Screen
      name="SignIn"
      component={SignIn}
      options={{title: 'SignIn'}}
    />
    <StackNav.Screen name="Register" component={SignUp} />
  </StackNav.Navigator>
);

export default StackNavScreen;
