import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles'
import Landing from './landing';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing />
      </View>
    );
  }
}
