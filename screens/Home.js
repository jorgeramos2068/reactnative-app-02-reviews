import React from 'react';
import { Button, View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Home = ({navigation}) => {
  const handlePress = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('ReviewDetails');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button
        title="Go to Review Details"
        onPress={handlePress}
      />
    </View>
  );
};

export default Home;
