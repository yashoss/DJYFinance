import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

export default class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      country: ""
    }
  }

  render(){
    return(
      <View style={styles.landingContainer} className="landing-container">
        <Text style={styles.header} className="header">DJY Finance</Text>
        <TextInput style={styles.textInput} className="country" value={this.state.country} onChangeText={(country) => this.setState({country})} placeholder="Select Country"></TextInput>
      </View>
    )
  }
}
