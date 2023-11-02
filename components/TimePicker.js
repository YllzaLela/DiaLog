import { Picker } from "@react-native-picker/picker";
import theme from "../config/theme";
import React from "react";
import { useState } from "react";
import { MedicationState } from "./States/MedicationState";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export const TimePicker = ({ hour, setHour, minute, setMinute, addTime }) => {
  return (
    <>
      {/* Hour picker */}
      <Picker
        selectedValue={hour}
        onValueChange={(itemValue) => setHour(itemValue)}
        style={{ height: 50, width: 100, color: theme.colors.text }}
      >
        {[...Array(24).keys()].map((h) => (
          <Picker.Item key={h} label={h.toString()} value={h} />
        ))}
      </Picker>

      {/* Minute picker */}
      <Picker
        selectedValue={minute}
        onValueChange={(itemValue) => setMinute(itemValue)}
        style={{ height: 50, width: 100, color: theme.colors.text }}
      >
        {[...Array(60).keys()].map((m) => (
          <Picker.Item key={m} label={m.toString()} value={m} />
        ))}
      </Picker>
      <Button
        buttonStyle={styles.buttonStyle}
        title="Add Time"
        titleStyle={styles.buttonStyle.titleStyle}
        onPress={addTime}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: theme.colors.background,
  },
  buttonStyle: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: 16,
    paddingHorizontal: 10,
    margin: 10,
    alignSelf: "flex-start",
    titleStyle: {
      color: theme.colors.text,
      fontFamily: "Montserrat_400Regular",
    },
  },
  titleStyle: {
    fontSize: 25,
    fontFamily: theme.fonts.bold,
    color: theme.colors.tertiary,
    margin: 20,
  },
  pinkButtonStyle: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    paddingHorizontal: 10,
    margin: 20,
    alignSelf: "flex-start",
    titleStyle: {
      color: theme.colors.text,
      fontFamily: "Montserrat_400Regular",
    },
  },
});
