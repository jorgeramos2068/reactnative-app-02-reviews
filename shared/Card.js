import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 3,
    marginHorizontal: 4,
    marginVertical: 6,
    shadowColor: '#333',
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10
  },
});

export default Card;
