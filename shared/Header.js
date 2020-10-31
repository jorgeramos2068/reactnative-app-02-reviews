import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from'@expo/vector-icons';

const Header = ({navigation, title}) => {
  const handleOpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={handleOpenMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/images/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },
  headerImage: {
    height: 26,
    marginHorizontal: 10,
    width: 26
  },
  headerText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  headerTitle: {
    flexDirection: 'row',
  },
  icon: {
    left: 16,
    position: 'absolute'
  }
});

export default Header;
