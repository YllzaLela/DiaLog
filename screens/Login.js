import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, Pressable } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../components/Form/FormInput'
import FormButton from '../components/Form/FormButton'
import { theme } from '../config/theme'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Fragment } from 'react'
import ErrorMessage from '../components/Form/ErrorMessage'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {

    const insets= useSafeAreaInsets();

    
    
    const handleSubmit = (values, { navigation }) => {
      if (values.email.length > 0 && values.password.length > 0) {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate('Home');
        })
        .catch((error) => {
          console.log(error);
        })
      }};
      
      const handleSignUp = (values) => {
        if (values.email.length > 0  && values.password.length > 0) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user= userCredential.user;
          navigation.navigate('Questionnaire');
        })
        .catch((error) => {
          console.log(error);
        })
      }};


      const validationSchema = Yup.object().shape({
        email: Yup.string()
          .label('Email')
          .email('Please enter valid email')
          .required('Email Address is Required'),
        password: Yup.string()
          .label('Password')
          .min(4, 'Password must be at least 4 characters')
          .required('Password is required'),
      });

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background, flex: 1, paddingTop: insets.top}]}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => handleSubmit(values, { navigation })}
          validationSchema={validationSchema}
        > 

       {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
        <Fragment> 

          <FormInput
            name="email"
            value={values.email}
            color={theme.colors.primary}
            placeholder="Enter email"
            onChangeText={handleChange('email')}
            iconName="ios-mail"
            iconColor={theme.colors.tertiary}
            onBlur={handleBlur('email')}
            inputStyle= {{color: theme.colors.text, fontFamily: 'Montserrat_400Regular'}}
          />
          <ErrorMessage errorValue= {touched.email && errors.email}/>

          <FormInput
            name="password"
            value={values.password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={handleChange('password')}
            iconName="lock-closed-outline"
            iconColor={theme.colors.tertiary}
            onBlur={handleBlur('password')}
            inputStyle= {{color: theme.colors.text}}
          />
         <ErrorMessage errorValue= {touched.password && errors.password}/>
        
        <View style={{margin: theme.spacing.medium}}>
            <FormButton
              onPress={handleSubmit}
              title="LOGIN"
              titleColor={theme.colors.primary}
              backgroundColor={theme.colors.primary}
              disabled={ !isValid }
            />

          <Button
            title="Create Account"
            onPress={() => handleSignUp(values)}
            titleStyle={{
              color: theme.colors.text,
              fontFamily: 'Montserrat_400Regular'
            }}
            type="clear"
            />

          <Button
            title="Continue as Guest"
            onPress={() => navigation.navigate('Questionnaire')}
            titleStyle={{
              color: theme.colors.tertiary,
              fontFamily: 'Montserrat_400Regular',
            }}
            type="clear"
            />
        </View>
          </Fragment> 
            )}
          </Formik>
        </View>
      )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    button: {
      margin: 8,
      alignItems: 'center',
    },
  })