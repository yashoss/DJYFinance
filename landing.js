import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      country: ""
    }
  }

  render(){
    return(
      <View className="landing-container">
        <Text className="header">Select Country</Text>
        <TextInput className="country" value={this.state.country} onChangeText={(country) => this.setState({country})} placeholder="Select Country"></TextInput>
      </View>
    )
  }
}
