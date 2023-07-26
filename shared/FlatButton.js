import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FlatButton = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f01d71',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

export default FlatButton;
