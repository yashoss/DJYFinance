import {StyleSheet} from 'react-native';

const WIDTH = 200;

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
    width: WIDTH,
    height: 81,
    backgroundColor: '#FFF',
    marginBottom: 11,
  },
  textInput: {
    alignSelf: 'center',
    fontSize: 20,
    height: 30,
    width: WIDTH,
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
  },
  numberDisplay: {
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 20,
    height: 30,
    width: WIDTH,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
  },
});

export default styles;
