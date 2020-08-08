import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default class dummy1 extends React.Component {
  componentDidMount = () => {
    this.props.navigation.navigate('SignIn');
  };
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
