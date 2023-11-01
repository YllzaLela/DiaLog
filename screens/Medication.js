import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, Divider } from "react-native-elements";
import theme from "../config/theme";
import { StyleSheet } from "react-native";
import InputLabel from "../components/Form/InputLabel";
import MedicationCard from "../components/MedicationCard";
import FormInput from "../components/Form/FormInput";
import RadioGroup from "../components/Form/RadioGroup";
import { Text } from "react-native-elements";
import DaysOfWeekSelector from "../components/daysOfWeekSelector";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import userMedications from "../dummyData";
import DateTimePicker from "@react-native-community/datetimepicker";

export function Medication() {
  const [selectedDays, setSelectedDays] = useState([]);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [times, setTimes] = useState([]);
  const addTime = () => {
    setTimes((prevTimes) => [...prevTimes, { hour, minute }]);
  };
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "set") {
      // This ensures the action was a date set action
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
    hideDatePicker();
  };

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const selectedDateString = date.toISOString().split("T")[0];

  const validationSchema= Yup.object().shape({
    medicationName: Yup.string()
    .matches(/^[a-zA-Z\s]+?$/, "Name cannot contain numbers!")
    .max(200, "Name must be less than 200 characters!")
    .required("Medication name is required!"),
    
    dose: Yup.number()
    .required("Dose is required!"),
    
    dosageUnit: Yup.string()
    .required("Dosage unit is required!"),
    
    reminders: Yup.string()
    .oneOf (['yes', 'no'], 'Please select one')
    .required('Please select one'),
    
    daysOfWeek: Yup.string()
    .required("Days of week is required!"),
    
    time: Yup.string()
    .required("Time is required!"),
    

    notes: Yup.string().max(200, "Notes must be less than 200 characters!"),
    });


  
  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{ medicationName: "", dose: "", dosageUnit: "", reminders: ["yes", "no"], daysOfWeek: "", time: "", notes: "" }} 
      validationSchema={validationSchema}>
        {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
        <View>
          <ScrollView>
            <Card containerStyle={styles.cardStyle}>
              <InputLabel>Medication Name</InputLabel>
              <FormInput
                color={theme.colors.text}
                placeholder="Enter Medication Name"
              />

              <InputLabel>Dose</InputLabel>
              <FormInput
                color={theme.colors.text}
                placeholder="Enter Medication Dose"
              />

              <InputLabel>Dosage Unit</InputLabel>
              <FormInput
                color={theme.colors.text}
                placeholder="Enter Dosage Unit"
              />

              <InputLabel>Reminders</InputLabel>
              <RadioGroup
                name="reminders"
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
                onValueChange={handleChange("reminders")}
                //value={values.reminders}
                selectedValue={values.reminders}
                disabled={false}

              />
              {/* <Text style={styles.titleStyle}>Schedule</Text> */}

              <InputLabel>Which days of the week? </InputLabel>
              <DaysOfWeekSelector onDaysChange={setSelectedDays} />
              <Divider style={{ marginTop: 15 }} />

              <InputLabel>What time?</InputLabel>

              <Picker
                selectedValue={hour}
                onValueChange={(itemValue) => setHour(itemValue)}
                style={{ height: 50, width: 100, color: theme.colors.text }}
              >
                {[...Array(24).keys()].map((h) => (
                  <Picker.Item key={h} label={h.toString()} value={h} />
                ))}
              </Picker>

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
              <View>
                {times.map((time, index) => (
                  <Text style={{ color: theme.colors.text }} key={index}>{`${
                    time.hour
                  }:${
                    time.minute < 10 ? "0" + time.minute : time.minute
                  }`}</Text>
                ))}
              </View>
              <Divider style={{ marginTop: 15 }} />

              <InputLabel>Specific Dates?</InputLabel>
              <Button
                buttonStyle={styles.buttonStyle}
                title="Add Date"
                titleStyle={styles.buttonStyle.titleStyle}
                onPress={showDatePicker}
              />
              {isDatePickerVisible && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                />
              )}

              <Divider style={{ marginTop: 15 }} />

              <InputLabel>What time? </InputLabel>
              <Picker
                selectedValue={hour}
                onValueChange={(itemValue) => setHour(itemValue)}
                style={{ height: 50, width: 100, color: theme.colors.text }}
              >
                {[...Array(24).keys()].map((h) => (
                  <Picker.Item key={h} label={h.toString()} value={h} />
                ))}
              </Picker>

              <Picker
                selectedValue={minute}
                onValueChange={(itemValue) => setMinute(itemValue)}
                style={{ height: 50, width: 100, color: theme.colors.text }}
              >
                {[...Array(60).keys()].map((m) => (
                  <Picker.Item key={m} label={m.toString()} value={m} />
                ))}
              </Picker>
              <View>
                {times.map((time, index) => (
                  <Text style={{ color: theme.colors.text }} key={index}>{`${
                    time.hour
                  }:${
                    time.minute < 10 ? "0" + time.minute : time.minute
                  }`}</Text>
                ))}
              </View>

              <Button
                buttonStyle={styles.buttonStyle}
                title="Add Time"
                titleStyle={styles.buttonStyle.titleStyle}
                onPress={addTime}
              />
              <Divider style={{ marginTop: 15 }} />

              <InputLabel>Notes</InputLabel>
                <FormInput
                    color={theme.colors.text}
                    placeholder="Enter Notes"
                    
                    />
            </Card>
            <Button
                buttonStyle={styles.pinkButtonStyle}
                title="Add Medication"
                titleStyle={styles.buttonStyle.titleStyle}
                onPress={addTime}
              />
          </ScrollView>

          <Text style={styles.titleStyle}>Medication List</Text>
          {userMedications.map((medication) => (
            <MedicationCard
              key={medication.id}
              medicationName={medication.name}
              dosage={medication.dosage}
              dosageUnit={medication.dosageUnit}
              notes={medication.note}
              showIcons={true}
            />
          ))}
        </View>
        )}
      </Formik>
    </ScrollView>
  );
}

export default Medication;

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
  cardStyle: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    borderColor: theme.colors.border,
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
