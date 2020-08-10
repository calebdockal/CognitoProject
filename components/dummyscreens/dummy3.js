import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default class dummy3 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text>This is a screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
