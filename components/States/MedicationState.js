import React from 'react';
import { useState } from 'react';

  export function MedicationState () {
  const [selectedDays, setSelectedDays] = useState([]);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [times, setTimes] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);


 const addTime = () => {
    setTimes((prevTimes) => [...prevTimes, { hour, minute }]);
  };
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    hideDatePicker();
  };
  
  const showPicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const toggleDaySelection = (day) => {
      setState((prevState) => {
        const prevSelectedDays = prevState.selectedDays;
        if (prevSelectedDays.includes(day)) {
          return { ...prevState, selectedDays: prevSelectedDays.filter((d) => d !== day) };
        } else {
          return { ...prevState, selectedDays: [...prevSelectedDays, day] };
        }
      });
  };
  
  return {     
      selectedDays,
      setSelectedDays,
      hour,
      setHour,
      minute,
      setMinute,
      times,
      setTimes,
      date,
      setDate,
      showDatePicker,
      setShowDatePicker,
      isDatePickerVisible,
      setDatePickerVisible, 
      addTime, 
      onChange, 
      showPicker, 
      hideDatePicker,
    };


};
  