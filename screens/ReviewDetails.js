import React from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ReviewDetails = ({navigation}) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails screen</Text>
      <Button
        title="Back to home screen"
        onPress={handlePress}
      />
    </View>
  );
};

export default ReviewDetails;
