import theme from '../config/theme';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DaysOfWeekSelector = ({ onDaysChange }) => {
  const days = [
    { label: 'Monday', value: 1 },
    { label: 'Tuesday', value: 2 },
    { label: 'Wednesday', value: 3 },
    { label: 'Thursday', value: 4 },
    { label: 'Friday', value: 5 },
    { label: 'Saturday', value: 6 },
    { label: 'Sunday', value: 7 }
  ];
  
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (dayValue) => {
    let updatedDays = [...selectedDays];
    if (selectedDays.includes(dayValue)) {
      updatedDays = updatedDays.filter(d => d !== dayValue);
    } else {
      updatedDays.push(dayValue);
    }
    setSelectedDays(updatedDays);
    onDaysChange(updatedDays);
  };

  return (
    <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
      {days.map(day => (
        <TouchableOpacity 
          key={day.value}
          style={[styles.dayButton, selectedDays.includes(day.value) ? styles.selected : {}]}
          onPress={() => toggleDay(day.value)}
        >
          <Text style={{color: theme.colors.text}}>{day.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dayButton: {
    padding: 10,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
  },
  selected: {
    backgroundColor: theme.colors.primary,
  }
});

export default DaysOfWeekSelector;