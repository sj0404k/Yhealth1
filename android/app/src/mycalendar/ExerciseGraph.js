import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 8;

const data = {
  labels: ['월', '화', '수', '목', '금', '토', '일'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50],
    },
  ],
};

const ExerciseGraph = () => {
  return (
    <View style={{ padding: 1, }}>
      <Text style={styles.title}> 운동시간 그래프</Text>
      <View>
        <BarChart
          data={data}
          width={screenWidth}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={{
            marginVertical: 2,
            borderRadius: 16,
            padding: 1,
          }}
        />
      </View>
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

export default ExerciseGraph;