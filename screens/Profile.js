import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../config/theme";
import { Card } from "react-native-elements";
import InputLabel from "../components/Form/InputLabel";
import { Button } from "react-native-elements";
import FormInput from "../components/Form/FormInput";
import RadioGroup from "../components/Form/RadioGroup";
import { Formik } from "formik";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { dummyUser } from "../dummyData";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+?$/, "Name cannot contain numbers!")
    .max(200, "Name must be less than 200 characters!")
    .required("Full name is required!"),
  //age must be from 1 to 120
  age: Yup.number()
    .min(1, "Age must be greater than 0!")
    .max(120, "Age must be less than 120!"),

  gender: Yup.string().required("Gender is required!"),

  //weight is in kg min 10 kg max 500 kg
  weight: Yup.number()
    .min(10, "Weight seems to low!")
    .max(500, "Weight seems to high!"),

  height: Yup.number()
    .min(10, "Height seems to low!")
    .max(300, "Height seems to high!"),

  diagnosis: Yup.string()
    .oneOf(
      ["Type 2 Diabetes", "Pre-Diabetes", "Other"],
      "Please select one that describes you best"
    )
    .required("Please select one that describes you best"),

  activityLevel: Yup.string()
    .oneOf(
      ["1.2", " 1.3", "1.5", "1.7", "1.9"],
      "Please select one that describes you best"
    )
    .required("Please select one that describes you best"),

  goal: Yup.string()
    .oneOf(
      ["Lose", "Gain", "Maintain"],
      "Please select one that describes you best"
    )
    .required("Please select one that describes you best"),
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign out successful");
    })
    .catch((error) => {
      console.log(error);
    });
}

function Profile() {
  const [isEditable, setIsEditable] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  
  const handleSave = () => {
    // For now, we will simulate a save action with a timeout
    // Later, this is where I'll add my database saving logic
    setTimeout(() => {
      setIsSaving(false);
      setIsEditable(false);
    }, 1000);  // Simulating a 2 second save action
  };
  return (
    <ScrollView style={styles.container}>
      <Card
        containerStyle={{
          borderRadius: 16,
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        <Formik
          initialValues={{
            email: dummyUser.email,
            name: dummyUser.name,
            age: dummyUser.age,
            gender: dummyUser.gender,
            weight: dummyUser.weight,
            height: dummyUser.height,
            diagnosis: dummyUser.diagnosis,
            activityLevel: dummyUser.activityLevel,
            goal: dummyUser.goal,
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
            <View>
              <InputLabel>Email:</InputLabel>
              <FormInput
                name="email"
                value={values.email}
                color={theme.colors.text}
                placeholder={values.email}
                onChangeText={handleChange("email")}
                inputStyle={{ color: theme.colors.text }}
                disabled={!isEditable}
              />
              <InputLabel>Name:</InputLabel>
              <FormInput
                name="name"
                value={values.name}
                color={theme.colors.text}
                placeholder={values.name}
                onChangeText={handleChange("name")}
                iconColor={theme.colors.tertiary}
                inputStyle={{ color: theme.colors.text }}
                disabled={!isEditable}
              />

              <InputLabel>Age:</InputLabel>
              <FormInput
                name="age"
                value={values.age}
                placeholder={values.age}
                onChangeText={handleChange("age")}
                onBlur={handleBlur("age")}
                inputStyle={{ color: theme.colors.text }}
                disabled={!isEditable}
              />
              <InputLabel>Gender:</InputLabel>
              <RadioGroup
                name="gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                selectedValue={values.gender}
                onValueChange={handleChange("gender")}
                disabled={!isEditable}
              />

              <InputLabel>Weight:</InputLabel>
              <FormInput
                name="weight"
                value={values.weight}
                placeholder={values.weight}
                onChangeText={handleChange("weight")}
                onBlur={handleBlur("weight")}
                keyboardType="numeric"
                inputStyle={{ color: theme.colors.text }}
                disabled={!isEditable}
              />

              <InputLabel>Height:</InputLabel>
              <FormInput
                name="height"
                value={values.height}
                placeholder={values.height}
                onChangeText={handleChange("height")}
                onBlur={handleBlur("height")}
                keyboardType="numeric"
                inputStyle={{ color: theme.colors.text }}
                disabled={!isEditable}
              />

              <InputLabel>Diagnosis:</InputLabel>
              <RadioGroup
                name="diagnosis"
                options={[
                  { label: "Yes, Type 2 Diabetes", value: "Type 2 Diabetes" },
                  { label: "Yes, pre-diabetes", value: "Pre-Diabetes" },
                  {
                    label: "No, I want to use this app for other purposes.",
                    value: "Other",
                  },
                ]}
                value={values.diagnosis}
                selectedValue={values.diagnosis}
                onValueChange={handleChange("diagnosis")}
                disabled={!isEditable}
              />

              <InputLabel>Activity Level:</InputLabel>
              <RadioGroup
                name="activityLevel"
                options={[
                  { label: "Sedentary: Little to no exercise.", value: "1.2" },
                  {
                    label:
                      "Lightly Active: Light exercise or sports 1-3 days a week. ",
                    value: "1.3",
                  },
                  {
                    label:
                      "Moderately Active: Moderate exercise or sports 3-5 days a week.",
                    value: "1.5",
                  },
                  {
                    label:
                      "Highly Active: Hard exercise or sports 6-7 days a week.",
                    value: "1.7",
                  },
                  {
                    label:
                      "Extremely Active: Very hard exercise, physical job, or training twice a day.",
                    value: "1.9",
                  },
                ]}
                selectedValue={values.activityLevel}
                onValueChange={handleChange("activityLevel")}
                disabled={!isEditable}
              />

              <InputLabel>Goal:</InputLabel>
              <RadioGroup
                name="goal"
                options={[
                  { label: "Lose Weight", value: "Lose" },
                  { label: "Maintain Weight", value: "Maintain" },
                  { label: "Gain Weight", value: "Gain" },
                ]}
                value={values.goal}
                selectedValue={values.goal}
                onValueChange={handleChange("goal")}
                disabled={!isEditable}
              />
            </View>
          )}
        </Formik>
      </Card>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          {!isEditable && (
            <Button
              buttonStyle={styles.buttonStyle}
              title="Edit Profile"
              titleStyle={styles.buttonStyle.titleStyle}
              onPress={() => setIsEditable(true)}
            />
          )}
          {isEditable && (
            <Button
              buttonStyle={styles.buttonStyle}
              title="Save"
              titleStyle={styles.buttonStyle.titleStyle}
              onPress={handleSave}
              disabled={isSaving}
            />
          )}
        </View>
        <Button
          buttonStyle={styles.logOutButton}
          title="Log Out"
          onPress={handleSignOut}
          titleStyle={styles.buttonStyle.titleStyle}
        />
      </View>
    </ScrollView>
  );
}

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
  logOutButton: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: 16,
    paddingHorizontal: 10,
    margin: 10,
    alignSelf: "flex-start",
  },
});

export default Profile;
