import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 8;

const ExerciseRecord = () => {
  return (
    <View style={{ padding: 1, }}>
      <Text style={styles.title}> 운동 기록</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
    wordWrap: 'break-word'
  }
})

export default ExerciseRecord;