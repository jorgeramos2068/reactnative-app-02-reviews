import React, { useState } from 'react';
import { FlatList, Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from'@expo/vector-icons';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

const Home = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { key: '1', title: 'Batman Returns', rating: 5, body: 'lorem ipsum' },
    { key: '2', title: 'Avengers Endgame', rating: 4, body: 'lorem ipsum' },
    { key: '3', title: 'Spiderman', rating: 3, body: 'lorem ipsum' },
  ]);

  const handleNavigate = (item) => {
    navigation.navigate('ReviewDetails', item);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={handleModalClose}
            style={{...styles.modalToggle, ...styles.modalClose}}
          />
          <Text>Hello from the modal</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={handleModalOpen}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleNavigate(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalClose: {
    marginBottom: 0,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
    marginTop: 24
  },
  modalToggle: {
    alignSelf: 'center',
    borderColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
});

export default Home;
