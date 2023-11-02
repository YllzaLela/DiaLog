//Importing necessary libraries for our questionnaire
import { React, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
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
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Fragment } from "react";
import FormInput from "../components/Form/FormInput";
import ErrorMessage from "../components/Form/ErrorMessage";
import FormButton from "../components/Form/FormButton";
import RadioGroup from "../components/Form/RadioGroup";
import { Header } from "react-native-elements";
import { CheckBox, Card, Text } from '@rneui/themed';
import InputLabel from "../components/Form/InputLabel";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { MacroCalculations } from "../logic/MacroCalculation"; 

//Validation schema for our form
const validationSchema = Yup.object().shape({
  name: Yup.string()
  .matches(/^[a-zA-Z\s]+?$/, "Name cannot contain numbers!")
  .max(200, "Name must be less than 200 characters!")
  .required("Full name is required!"),
  //age must be from 1 to 120
  age: Yup.number()
  .min(1, "Age must be greater than 0!")
  .max(120, "Age must be less than 120!")
  .positive
  .integer,
  
  gender: Yup.string().required('Gender is required!'),
  
  //weight is in kg min 10 kg max 500 kg
  weight: Yup.number()
  .min(10, "Weight seems to low!")
  .max(500, "Weight seems to high!")
  .positive
  .integer,

  height: Yup.number()
  .min(10, "Height seems to low!")
  .max(300, "Height seems to high!")
  .positive
  .integer,
  
  diagnosis: Yup.string()
  .oneOf (['Type 2 Diabetes', 'Pre-Diabetes', 'Other'], 'Please select one that describes you best')
  .required('Please select one that describes you best'),
  
  activityLevel: Yup.string()
  .oneOf (['1.2',' 1.3', '1.5', '1.7', '1.9'], 'Please select one that describes you best')
  .required('Please select one that describes you best'),

  goal: Yup.string()
  .oneOf (['Lose', 'Gain', 'Maintain'], 'Please select one that describes you best')
  .required('Please select one that describes you best'),
  
});


export default function Questionnaire({ navigation }) {
  
  const insets= useSafeAreaInsets();
  
  const userId = auth.currentUser?.uid;

  const handleSubmit = ( values ) => 
  {
    const macros = MacroCalculations(values.age, values.gender, values.weight, values.height, values.activityLevel, values.goal);
    values.macros = macros;
    if (userId) {
      try {
        const userDocRef = doc(collection(db, "User"), userId);
        setDoc(userDocRef, { ...values });
        console.log("Document written with ID: ", userId);
        setTimeout(() => {
          navigation.navigate('Home');
        }); 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.error("No authenticated user found!");
    }

  }
  
  return (
   
    <ScrollView style={[styles.container, {backgroundColor: theme.colors.background, flex: 1, paddingTop: insets.top}]}>
    <Formik
      initialValues={{ name: '', age:0, gender: '', weight:0, height:0, diagnosis: '', activityLevel: 0, goal: '', macros: { calories: 0, protein: 0, fats: 0, carbs: 0 } }}
      onSubmit={values => handleSubmit(values)}
      validationSchema={validationSchema}
    > 

   {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
    <Fragment>
      {/*Full Name*/}
        <InputLabel>
        Name
        </InputLabel>
      <FormInput
        name="name"
        value={values.name}
        color={theme.colors.text}
        placeholder="Enter Full Name"
        onChangeText={handleChange('name')}
        iconColor={theme.colors.tertiary}
        inputStyle= {{color: theme.colors.text}}
      />
      <ErrorMessage errorValue= {touched.name && errors.name}/>
      
      {/*Age*/}
      <InputLabel>
        Age
      </InputLabel>
      <FormInput
        name="age"
        value={values.age}
        placeholder="Enter Age"
        onChangeText={handleChange('age')}
        onBlur={handleBlur('age')}
        inputStyle= {{color: theme.colors.text}} />
      <ErrorMessage errorValue= {touched.age && errors.age}/>

      {/*Gender*/}
      <InputLabel>
        Gender
        </InputLabel>
        {/*Radio Buttons go here for Male || Female*/}
        <RadioGroup
          name="gender"
          options={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value:'female'},
          ]}
          selectedValue={values.gender}
          disabled={false}
          onValueChange={handleChange('gender')}/> 

          <ErrorMessage errorValue={touched.gender && errors.gender}/>

          {/*Weight*/}
          <InputLabel>
        Weight
        </InputLabel>
          <FormInput
            name="weight"
            value={values.weight}
            placeholder="Enter Weight in kg"
            onChangeText={handleChange('weight')}
            onBlur={handleBlur('weight')}
            keyboardType="numeric"
            inputStyle= {{color: theme.colors.text}}
            />
          <ErrorMessage errorValue= {touched.weight && errors.weight}/>

          {/*Height*/}
          <InputLabel>
          Height
        </InputLabel>
         <FormInput
            name="height"
            value={values.height}
            placeholder="Enter height in cm"
            onChangeText={handleChange('height')}
            onBlur={handleBlur('height')}
            keyboardType="numeric"
            inputStyle= {{color: theme.colors.text}}
            />
          <ErrorMessage errorValue= {touched.height && errors.height}/>


          {/*Diagnosis*/}
          <InputLabel>
          Have you been diagnosed with any of the following? 
        </InputLabel>
          
        <RadioGroup
        name="diagnosis"
           options={[
            {label: 'Yes, Type 2 Diabetes', value: 'Type 2 Diabetes'},
            {label: 'Yes, pre-diabetes', value: 'Pre-Diabetes'},
            {label: 'No, I want to use this app for other purposes.', value:'Other'},
          ]}
          value={values.diagnosis}
          selectedValue={values.diagnosis}
          disabled={false}
          onValueChange={handleChange('diagnosis')}/>
          <ErrorMessage errorValue={touched.diagnosis && errors.diagnosis}/>
          
          {/*Activity Level*/}
         <InputLabel>Which describes your activity level best? </InputLabel>
        <RadioGroup
        name="activityLevel"
           options={[
            {label: 'Sedentary: Little to no exercise.', value: '1.2'},
            {label: 'Lightly Active: Light exercise or sports 1-3 days a week. ', value: '1.3'},
            {label: 'Moderately Active: Moderate exercise or sports 3-5 days a week.', value:'1.5'},
            {label: 'Highly Active: Hard exercise or sports 6-7 days a week.', value:'1.7'},
            {label: 'Extremely Active: Very hard exercise, physical job, or training twice a day.', value:'1.9'},
          ]}
          selectedValue={values.activityLevel}
          disabled={false}
          onValueChange={handleChange('activityLevel')}/>
          <ErrorMessage errorValue={touched.activityLevel && errors.activityLevel}/>

          {/*Goal*/}
          <InputLabel>What is your goal? </InputLabel>
        <RadioGroup
        name="goal"
            options={[
            {label: 'Lose Weight', value: 'Lose'},
            {label: 'Maintain Weight', value:'Maintain'},
            {label: 'Gain Weight', value: 'Gain'},
          ]}
          value={values.goal}
          selectedValue={values.goal}
          disabled={false}
          onValueChange={handleChange('goal')}/>
          <ErrorMessage errorValue={touched.goal && errors.goal}/>

          {/*Submit Button*/}
      <View style={[styles.buttonContainer, {margin: theme.spacing.medium}]}>
        <FormButton
          onPress={handleSubmit}
          title="Continue"
          titleColor={theme.colors.tertiary}
          disabled={!isValid}
          backgroundColor={theme.colors.primary}
          buttonColor={theme.colors.text}
        />
      </View>


      {/*Skip Button*/}
      <View style={ [styles.buttonContainer, {margin: theme.spacing.medium},]}>
      <FormButton
          onPress={() => navigation.replace('Home')}
          title="Skip"
          backgroundColor={theme.colors.tertiary}
          buttonColor={theme.colors.text}/>
      </View>
      </Fragment> 
        )}
      </Formik>
    </ScrollView>
  
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
header: {
  fontSize: 24,                 
  fontWeight: 'bold',        
  textAlign: 'left',      
  marginVertical: 20, 
  marginLeft: 25,       
  color: theme.colors.text,
},  
},
);