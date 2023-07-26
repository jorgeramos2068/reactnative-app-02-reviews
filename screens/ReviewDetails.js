import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/Card';
import { globalStyles, globalImages } from '../styles/global';

const ReviewDetails = ({navigation}) => {
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>Rating:</Text>
          <Image source={globalImages.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    borderTopColor: '#eee',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 16,
  }
});

export default ReviewDetails;
