import { StyleSheet, View, Text } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  titleText: {
    color: '#333',
    fontFamily: 'nunito-bold',
    fontSize: 18
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8
  }
});

export default globalStyles;
