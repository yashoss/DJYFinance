import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    landingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EDEDED',
    },
      header: {
        fontSize: 40,
        color: 'black',
      },
        picker: {
          width: 200,
          height: 80,
          backgroundColor: '#FFF',
          marginBottom: 10
        },
        textInput: {
          alignSelf: 'center',
          height: 30,
          width: 200,
          textAlign: 'center',
          backgroundColor: '#FFF',
          borderWidth: 0.5,
          borderColor: '#C0C0C0',
        },
});

export default styles;
