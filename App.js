import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.word}>This is a Test</Text>
      </View>
    );
  }
}
