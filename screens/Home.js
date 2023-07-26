import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

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
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
