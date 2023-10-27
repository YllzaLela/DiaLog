import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../config/theme";
import { Card } from "react-native-elements";
import InputLabel from "../components/Form/InputLabel";
import { Button } from "react-native-elements";

function Profile() {
  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          borderRadius: 16,
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        <InputLabel>Email:</InputLabel>
        <InputLabel>Name:</InputLabel>
        <InputLabel>Age:</InputLabel>
        <InputLabel>Gender:</InputLabel>
        <InputLabel>Weight:</InputLabel>
        <InputLabel>Height:</InputLabel>
        <InputLabel>Diagnosis:</InputLabel>
        <InputLabel>Activity Level:</InputLabel>
        <InputLabel>Goal:</InputLabel>
      </Card>
      <View style={styles.container}>
      <Button
        buttonStyle={styles.buttonStyle}
        title="Edit Profile"
        titleStyle={styles.buttonStyle.titleStyle}
      />
      <Button
        buttonStyle={styles.logOutButton}
        title="Log Out"
        titleStyle={styles.buttonStyle.titleStyle}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
    alignItems: "left",
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
  logOutButton: 
  {
    backgroundColor: theme.colors.tertiary,
    borderRadius: 16,
    paddingHorizontal: 10,
    margin: 10,
    alignSelf: "flex-start",
  },
});

export default Profile;
