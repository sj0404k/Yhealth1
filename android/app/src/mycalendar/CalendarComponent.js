// CalendarComponent.js

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import YHealthTopBar from '../NavigatorBar/topbar';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const renderHeader = (date) => {
    const month = date.toString('MMMM');
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 25 }}>{month}</Text>
      </View>
    );
  };
  return (
    <View>
      <YHealthTopBar />
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
        }}
        renderHeader={renderHeader}
      />
      <View style={{ marginTop: 20 }}>
        <Text>Selected Date: {selectedDate}</Text>
      </View>
    </View>
  );
};

export default CalendarComponent;
