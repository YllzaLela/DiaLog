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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Fragment } from "react";
import FormInput from "../components/FormInput";
import ErrorMessage from "../components/ErrorMessage";
import FormButton from "../components/FormButton";
import RadioGroup from "../components/RadioGroup";
import { Header } from "react-native-elements";
import { CheckBox, Card, Text } from '@rneui/themed';

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
  gender: Yup.string().required('Gender is required!'),

});

export default function Questionnaire({ navigation }) {
  const insets= useSafeAreaInsets();

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(['male', 'female']);

  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.colors.background, flex: 1, paddingTop: insets.top}]}>
    <Formik
      initialValues={{ name: '', age:0 }}
      onSubmit={values => handleSubmit(values, { navigation })}
      validationSchema={validationSchema}
    > 

   {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
    <Fragment>
      {/*Full Name*/}
        <Text style={{
          fontSize: theme.fonts.sizes.medium,
          fontWeight: 'bold',
          textAlign: 'Left',
          marginTop: 20,
          marginLeft: 25,
          color: theme.colors.text,
        }}> Full Name </Text>;   
      <FormInput
        name="name"
        value={values.name}
        color={theme.colors.primary}
        placeholder="Enter Full Name"
        onChangeText={handleChange('name')}
        iconColor={theme.colors.tertiary}
        inputStyle= {{color: theme.colors.text}}
      />
      <ErrorMessage errorValue= {touched.name && errors.name}/>

      {/*Age*/}
      <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'Left',
          marginLeft: 25,
          color: theme.colors.text,
        }}> Age </Text>;
      <FormInput
        name="age"
        value={values.age}
        placeholder="Enter Age"
        onChangeText={handleChange('age')}
        onBlur={handleBlur('age')}
        inputStyle= {{color: theme.colors.text}}>
        </FormInput>
      <ErrorMessage errorValue= {touched.age && errors.age}/>

      {/*Gender*/}
      <Text style={{
          fontSize: theme.fonts.sizes.medium,
          fontWeight: 'bold',
          textAlign: 'Left',
          marginTop: 20,
          marginLeft: 25,
          color: theme.colors.text,
        }}> Gender </Text>; 
        {/*Radio Buttons go here for Male || Female*/}
        <RadioGroup
          options={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value:'female'},
          ]}
          selectedValue={values.gender}
          onValueChange={handleChange('gender')}> </RadioGroup>

          <ErrorMessage errorValue={touched.gender && errors.gender}/>

      {/*Submit Button*/}
      <View style={[styles.buttonContainer, {margin: theme.spacing.medium}]}>
        <FormButton
          onPress={handleSubmit}
          title="Continue"
          titleColor={theme.colors.primary}
          disabled={ !isValid || isSubmitting}
          backgroundColor={theme.colors.primary}
          buttonColor={theme.colors.textContrast}
        />
      </View>


      {/*Skip Button*/}
      <View style={ [styles.buttonContainer, {margin: theme.spacing.medium},]}>
      <FormButton
          onPress={handleSubmit}
          title="Skip"
          backgroundColor={theme.colors.tertiary}
          buttonColor={theme.colors.textContrast}/>
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
  textAlign: 'Left',      
  marginVertical: 20, 
  marginLeft: 25,       
  color: theme.colors.text,
},  
},
);