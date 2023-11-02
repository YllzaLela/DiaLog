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
import { db, auth } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

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
      ["fasted", "pre-meal", "post-meal", "bedtime"],
      "Please select one that describes your situation best"
    )
    .required("Please select one that describes you best"),
});

const handleSubmit = async (values, formikBag) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const glucoseLogRef = collection(db, "User", user.uid, "glucoseLog");

      await addDoc(glucoseLogRef, {
        glucose: values.glucose,
        unit: values.unit,
        notes: values.notes,
        tags: values.tags,
        timestamp: new Date(),
      });

      alert("Glucose was successfully saved!");
      formikBag.resetForm();

    } else {
      alert("Please sign in to save your glucose reading.");
    }
  } catch (error) {
    console.error("Error adding glucoseLog: ", error);
    alert("An error occurred. Please try again.");
  }

  
  
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
      onSubmit={(values, formikBag) => handleSubmit(values, formikBag)}
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
            <ErrorMessage errorValue={touched.glucose && errors.glucose} />



            <RadioGroup
              name="unit"
              options={[
                { label: "mg/dL", value: "mg/dL" },
                //{ label: "mmol/L", value: "mmol/L" },
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
              value={values.tags}
              disabled={false}
              onValueChange={handleChange("tags")}
            />
            <ErrorMessage errorValue={touched.tags && errors.tags} />


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
