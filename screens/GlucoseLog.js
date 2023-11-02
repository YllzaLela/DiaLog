import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import InputLabel from "../components/Form/InputLabel";
import theme from "../config/theme";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import FormInput from "../components/Form/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import RadioGroup from "../components/Form/RadioGroup";
import { Button } from "react-native-elements";
import ErrorMessage from "../components/Form/ErrorMessage";
import { Card } from "react-native-elements";

const validationSchema = Yup.object().shape({
  //glucose
  glucose: Yup.number()
    .min(1, "Reading cannot be less than 1!")
    .max(500, "Reading cannot be more than 500!")
    .required("Reading is required!"),

  //notes
  notes: Yup.string().max(500, "Notes must be less than 500 characters!"),

  //tags
  tags: Yup.string()
    .oneOf(
      ["Fasted", "Pre-Meal", "Post-Meal", "Bedtime"],
      "Please select one that describes your situation best"
    )
    .required("Please select one that describes you best"),
});
const handleSubmit = (values) => {
  // For now, we will simulate a save action with a timeout
  // Later, this is where I'll add my database saving logic
  setTimeout(() => {
    alert("Glucose was successfully saved!");
  }, 1000); // Simulating a 1 second save action
};

function GlucoseLog({ navigation }) {
  return (
    <Formik
      initialValues={{
        glucose: "",
        unit: "mg/dL", // "mmol/L
        notes: "",
        tags: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validationSchema}
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
        <ScrollView style={styles.container}>
          <Card
            containerStyle={{
              borderRadius: 16,
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
            }}
          >
            <InputLabel>Glucose Reading</InputLabel>
            <FormInput
              name="glucose"
              value={values.glucose}
              placeholder="Enter glucose reading"
              onChangeText={handleChange("glucose")}
              onBlur={handleBlur("glucose")}
              keyboardType="numeric"
              inputStyle={{ color: theme.colors.text }}
            />
            <ErrorMessage errorValue={touched.reading && errors.reading} />
            <RadioGroup
              name="unit"
              options={[
                { label: "mg/dL", value: "mg/dL" },
                { label: "mmol/L", value: "mmol/L" },
              ]}
              selectedValue={values.unit}
              onValueChange={handleChange("unit")}
            />

            <InputLabel>Notes</InputLabel>
            <FormInput
              name="notes"
              value={values.notes}
              color={theme.colors.text}
              placeholder={"Enter notes here"}
              onChangeText={handleChange("notes")}
              inputStyle={{ color: theme.colors.text }}
            />
            <ErrorMessage errorValue={touched.reading && errors.reading} />

            <InputLabel>Tags</InputLabel>
            <RadioGroup
              name="tags"
              options={[
                { label: "Fasted", value: "fasted" },
                { label: "Pre-Meal", value: "pre-meal" },
                { label: "Post-Meal", value: "post-meal" },
                { label: "Bedtime", value: "bedtime" },
              ]}
              selectedValue={values.tags}
              onValueChange={handleChange("tags")}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              title="Add Reading"
              titleStyle={styles.buttonStyle.titleStyle}
              onPress={handleSubmit}
            />
          </Card>
        </ScrollView>
      )}
    </Formik>
  );
}

export default GlucoseLog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    paddingHorizontal: 10,
    margin: 10,
    alignSelf: "flex-start",
    titleStyle: {
      color: theme.colors.text,
      fontFamily: "Montserrat_400Regular",
    },
  },
});
