//Importing necessary libraries for our questionnaire
import { React, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { theme } from "../config/theme";

//Validation schema for our form
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Name cannot contain numbers!")
    .max(200, "Name must be less than 200 characters!")
    .required("Full name is required!"),
  //age must be from 1 to 120
  age: Yup.number()
    .min(1, "Age must be greater than 0!")
    .max(120, "Age must be less than 120!"),
});

export default function QuestionnaireScreen() {

return (
<KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style= {{flex:1}}
    >

    <Formik
      initialValues={{ fullName: "", age: 0 }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
          //handle form submission
          console.log(values);
        }}
        >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <ScrollView>
          <View style={{marginBottom: 20}}>
            
           
            <TextInput placeholder="Enter Full Name"/>
            {errors.fullName && <Text>{errors.fullName}</Text>}

            <Text style={{ color: theme.Text, marginBottom: 10 }}>Age</Text>
            <Picker
               selectedValue={values.age}
               onValueChange={handleChange('age')}
               /*style={{ backgroundColor: theme.darkColors.card, color: theme.darkColors.text }}*/
               >
                {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
                    <Picker.Item key={number} label={String(number)} value={number} />
                ))}
            </Picker>

            <Button onPress={handleSubmit} title="Continue" />
          </View>
        </ScrollView>
      )}
    </Formik>
</KeyboardAvoidingView>
  );
}
