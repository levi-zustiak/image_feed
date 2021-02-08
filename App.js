import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Avatar from './components/Avatar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          initials="LZ"
          size={35}
          backgroundColor={'blue'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
