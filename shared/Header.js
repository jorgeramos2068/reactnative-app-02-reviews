import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from'@expo/vector-icons';

const Header = ({navigation, title}) => {
  const handleOpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={handleOpenMenu} style={styles.icon} />
      <View>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  headerText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  icon: {
    left: 16,
    position: 'absolute'
  }
});

export default Header;
