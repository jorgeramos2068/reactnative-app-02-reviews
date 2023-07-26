import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    { key: '1', title: 'Batman Returns', rating: 5, body: 'lorem ipsum' },
    { key: '2', title: 'Avengers Endgame', rating: 4, body: 'lorem ipsum' },
    { key: '3', title: 'Spiderman', rating: 3, body: 'lorem ipsum' },
  ]);

  const handlePress = (item) => {
    navigation.navigate('ReviewDetails', item);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
