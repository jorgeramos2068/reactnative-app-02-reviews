import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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

export const globalImages = {
  ratings: {
    '1': require('../assets/images/rating-1.png'),
    '2': require('../assets/images/rating-2.png'),
    '3': require('../assets/images/rating-3.png'),
    '4': require('../assets/images/rating-4.png'),
    '5': require('../assets/images/rating-5.png'),
  },
};
