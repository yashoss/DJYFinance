import React from 'react';
import { Picker, View, Text, TextInput } from 'react-native';
import Conversion from "./conversion"
import styles from './styles';


export default class Landing extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.landingContainer}>
        <Text style={styles.header}>DJY Finance</Text>
        <Conversion/>
      </View>
    )
  }
}
