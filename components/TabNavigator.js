import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Profile from './Profile';
import dummy1 from './dummyscreens/dummy1';
import dummy2 from './dummyscreens/dummy2';
import dummy3 from './dummyscreens/dummy3';
import dummy4 from './dummyscreens/dummy4';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Tab2') {
            return (
              <View
                style={
                  focused === true
                    ? [styles.tabBarIcon, styles.activeTab]
                    : [styles.tabBarIcon, styles.inactiveTab]
                }>
                <MaterialIcons
                  name="message"
                  size={35}
                  color={focused === true ? '#2cc9f5' : color}
                />
              </View>
            );
          } else if (route.name === 'Tab3') {
            return (
              <View
                style={
                  focused === true
                    ? [styles.tabBarIcon, styles.activeTab]
                    : [styles.tabBarIcon, styles.inactiveTab]
                }>
                <Ionicons
                  name="notifications"
                  size={30}
                  color={focused === true ? '#2cc9f5' : color}
                />
              </View>
            );
          } else if (route.name === 'Tab4') {
            return (
              <View
                style={
                  focused === true
                    ? [styles.tabBarIcon, styles.activeTab]
                    : [styles.tabBarIcon, styles.inactiveTab]
                }>
                <FontAwesome
                  name="users"
                  size={25}
                  color={focused === true ? '#2cc9f5' : color}
                />
              </View>
            );
          } else {
            return (
              <View
                style={
                  focused === true
                    ? [styles.tabBarIcon, styles.activeTab]
                    : [styles.tabBarIcon, styles.inactiveTab]
                }>
                <FontAwesome
                  name="user-alt"
                  size={25}
                  color={focused === true ? '#2cc9f5' : color}
                />
              </View>
            );
          }
        },
      })}>
      <Tab.Screen name="Tab2" component={dummy1} />
      <Tab.Screen name="Tab3" component={dummy2} />
      <Tab.Screen name="Tab4" component={dummy3} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 85,
    height: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#f3f3f3',
    top: -7,
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
});
