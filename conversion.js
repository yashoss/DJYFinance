import React from 'react';
import { Picker, View, Text, TextInput } from 'react-native';
import styles from './styles';

export default class Conversion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      base: "",
      to: "",
      amount: "",
      newAmount: "0"
    }
  }

  render(){
    return(
      <View>
        <View>
          <Text>From: </Text>
          <TextInput
            style={styles.textInput}
            value={this.state.amount}
            onChangeText={(amount) => this.setState({amount})}
            placeholder="0">
          </TextInput>
          <Picker
            style={styles.picker}
            itemStyle={{height: 80}}
            selectedValue={this.state.base}
            onValueChange={(itemValue, itemIndex) => this.setState({base: itemValue})}>
            <Picker.Item label="AUD" value="AUD" />
            <Picker.Item label="BGN" value="BGN" />
            <Picker.Item label="BRL" value="BRL" />
            <Picker.Item label="CAD" value="CAD" />
            <Picker.Item label="CHF" value="CHF" />
            <Picker.Item label="CNY" value="CNY" />
            <Picker.Item label="CZK" value="CZK" />
            <Picker.Item label="DKK" value="DKK" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
            <Picker.Item label="HKD" value="HKD" />
            <Picker.Item label="HRK" value="HRK" />
            <Picker.Item label="HUF" value="HUF" />
            <Picker.Item label="IDR" value="IDR" />
            <Picker.Item label="ILS" value="ILS" />
            <Picker.Item label="INR" value="INR" />
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="KRW" value="KRW" />
            <Picker.Item label="MXN" value="MXN" />
            <Picker.Item label="MYR" value="MYR" />
            <Picker.Item label="NOK" value="NOK" />
            <Picker.Item label="NZD" value="NZD" />
            <Picker.Item label="PHP" value="PHP" />
            <Picker.Item label="PLN" value="PLN" />
            <Picker.Item label="RON" value="RON" />
            <Picker.Item label="RUB" value="RUB" />
            <Picker.Item label="SEK" value="SEK" />
            <Picker.Item label="SGD" value="SGD" />
            <Picker.Item label="THB" value="THB" />
            <Picker.Item label="TRY" value="TRY" />
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="ZAR" value="ZAR" />
          </Picker>
        </View>

        <View>
          <Text>To: </Text>
          <Text>{this.state.newAmount}</Text>
          <Picker
            style={styles.picker}
            itemStyle={{height: 80}}
            selectedValue={this.state.to}
            onValueChange={(itemValue, itemIndex) => this.setState({to: itemValue})}>
            <Picker.Item label="AUD" value="AUD" />
            <Picker.Item label="BGN" value="BGN" />
            <Picker.Item label="BRL" value="BRL" />
            <Picker.Item label="CAD" value="CAD" />
            <Picker.Item label="CHF" value="CHF" />
            <Picker.Item label="CNY" value="CNY" />
            <Picker.Item label="CZK" value="CZK" />
            <Picker.Item label="DKK" value="DKK" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
            <Picker.Item label="HKD" value="HKD" />
            <Picker.Item label="HRK" value="HRK" />
            <Picker.Item label="HUF" value="HUF" />
            <Picker.Item label="IDR" value="IDR" />
            <Picker.Item label="ILS" value="ILS" />
            <Picker.Item label="INR" value="INR" />
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="KRW" value="KRW" />
            <Picker.Item label="MXN" value="MXN" />
            <Picker.Item label="MYR" value="MYR" />
            <Picker.Item label="NOK" value="NOK" />
            <Picker.Item label="NZD" value="NZD" />
            <Picker.Item label="PHP" value="PHP" />
            <Picker.Item label="PLN" value="PLN" />
            <Picker.Item label="RON" value="RON" />
            <Picker.Item label="RUB" value="RUB" />
            <Picker.Item label="SEK" value="SEK" />
            <Picker.Item label="SGD" value="SGD" />
            <Picker.Item label="THB" value="THB" />
            <Picker.Item label="TRY" value="TRY" />
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="ZAR" value="ZAR" />
          </Picker>
        </View>
      </View>
    )
  }
}
