import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
    </View>
  );
};

export default Home;
