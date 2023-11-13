// YHealthTopBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YHealthTopBar = () => {
  return (
    <View style={styles.topBarContainer}>
      <Text style={styles.title}>
        <Text style={{ color: 'blue' }}> Y</Text>Health</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#ffffff',
    padding: [0, 20, 15, 20],
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default YHealthTopBar;
