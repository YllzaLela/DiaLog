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
import { TimePicker } from "../components/TimePicker";
import { MedicationState } from "../components/States/MedicationState";
import ErrorMessage from "../components/Form/ErrorMessage";
import  {db}  from "../firebaseConfig";

export function Medication() {
  const {
    selectedDays,
    setSelectedDays,
    hour,
    setHour,
    minute,
    setMinute,
    times,
    setTimes,
    //date,
    //setDate,
    //showDatePicker,
    //setShowDatePicker,
    //isDatePickerVisible,
   // setDatePickerVisible,
    addTime,
    onChange,
   // showPicker,
   //hideDatePicker,
  } = MedicationState();

  //const selectedDateString = date.toISOString().split("T")[0];

  const validationSchema = Yup.object().shape({
    medicationName: Yup.string()
      .matches(/^[a-zA-Z\s]+?$/, "Name cannot contain numbers!")
      .max(200, "Name must be less than 200 characters!")
      .required("Medication name is required!"),

    dose: Yup.number().required("Dose is required!"),

    dosageUnit: Yup.string().required("Dosage unit is required!"),

    reminders: Yup.string()
      .oneOf(["yes", "no"], "Please select one")
      .required("Please select one"),


    notes: Yup.string().max(200, "Notes must be less than 200 characters!"),
  });

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{
          medicationName: "",
          dose: "",
          dosageUnit: "",
          reminders: [""],
          daysOfWeek: [],
          time: "",
          notes: "",
        }}
        validationSchema={validationSchema}

        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);

          // Add the form data to Firestore
          db
            .collection('Medications')
            .add({
              medicationName: values.medicationName,
              dose: values.dose,
              dosageUnit: values.dosageUnit,
              reminders: values.reminders,
              daysOfWeek: values.daysOfWeek,
              time: values.time,
              notes: values.notes,
            })
            .then(() => {
              console.log('Medication added to Firestore!');
            })
            .catch((error) => {
              console.error('Error adding medication to Firestore: ', error);
            });
        }}
      >

        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <View>
            <ScrollView>
              <Card containerStyle={styles.cardStyle}>
                <InputLabel>Medication Name</InputLabel>
                <FormInput
                  color={theme.colors.text}
                  placeholder="Enter Medication Name"
                  onChangeText={handleChange("medicationName")}
                  onBlur={handleBlur("medicationName")}
                  value={values.medicationName}
                />
                <ErrorMessage
                  errorValue={touched.medicationName && errors.medicationName}
                />

                <InputLabel>Dose</InputLabel>
                <FormInput
                  color={theme.colors.text}
                  placeholder="Enter Medication Dose"
                  onChangeText={handleChange("dose")}
                  onBlur={handleBlur("dose")}
                  value={values.dose}
                  keyboardType={"numeric"}
                />
                <ErrorMessage errorValue={touched.dose && errors.dose} />

                <InputLabel>Dosage Unit</InputLabel>
                <FormInput
                  color={theme.colors.text}
                  placeholder="Enter Dosage Unit"
                  onChangeText={handleChange("dosageUnit")}
                  onBlur={handleBlur("dosageUnit")}
                  value={values.dosageUnit}
                />
                <ErrorMessage errorValue={errors.dosageUnit} />

                <InputLabel>Reminders</InputLabel>
                <RadioGroup
                  name="reminders"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                  onValueChange={handleChange("reminders")}
                  value={values.reminders}
                  onBlur={handleBlur("reminders")}
                  selectedValue={values.reminders}
                  disabled={false}
                />
                <ErrorMessage errorValue={errors.reminders} />

                <InputLabel>Which days of the week? </InputLabel>
                <DaysOfWeekSelector onDaysChange={setSelectedDays} />
                <ErrorMessage errorValue={errors.daysOfWeek} />
                <Divider style={{ marginTop: 15 }} />

                <InputLabel>What time?</InputLabel>
                <TimePicker
                  hour={hour}
                  setHour={setHour}
                  minute={minute}
                  setMinute={setMinute}
                  addTime={addTime}
                />
                <ErrorMessage errorValue={touched.time && errors.time} />

                <Divider style={{ marginTop: 15 }} />

                {/* TODO Come back to this later and add functionality. Commented because complex */}
                {/* <InputLabel>Specific Dates?</InputLabel>
                <Button
                  buttonStyle={styles.buttonStyle}
                  title="Add Date"
                  titleStyle={styles.buttonStyle.titleStyle}
                  onPress={showPicker}
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
                <TimePicker
                  hour={hour}
                  setHour={setHour}
                  minute={minute}
                  setMinute={setMinute}
                  addTime={addTime}
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
                <Divider style={{ marginTop: 15 }} />*/}

                <InputLabel>Notes</InputLabel>
                <FormInput
                  color={theme.colors.text}
                  placeholder="Enter Notes"
                />
                <ErrorMessage errorValue={touched.notes && errors.notes} />
              </Card>
              <Button
                buttonStyle={styles.pinkButtonStyle}
                title="Add Medication"
                titleStyle={styles.buttonStyle.titleStyle}
                onPress={handleSubmit}
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
