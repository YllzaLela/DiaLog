import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MedicationCard from "./MedicationCard";
import theme from "../config/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MedicationList = () => {
    const navigation = useNavigation();
    // Placeholder data for today's medication
  const medicationData = [
    {
      id: 1,
      name: "Metformin",
      dosage: "500",
      dosageUnit: "mg",
      time: "8:00 AM",
      notes: "Take before food",
    },
    {
      id: 2,
      name: "Insulin",
      dosage: "10",
      dosageUnit: "units",
      time: "12:00 PM",
      notes: "Take after food",
    },
    {
      id: 3,
      name: "Lisinopril",
      dosage: "20",
      dosageUnit: "mg",
      time: "6:00 PM",
      notes: "Take with food",
    },
  ];

  return (
    <ScrollView style={{marginTop: 20}}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: theme.fonts.bold,
          color: theme.colors.text,
          textAlign: "left",
          marginLeft: 20,
          }}>
        Todays Medication
      </Text>
      {medicationData.map((medication) => (
        <MedicationCard
          key={medication.id}
          medicationName={medication.name}
          dosage={medication.dosage}
          dosageUnit={medication.dosageUnit}
          time={medication.time}
          notes={medication.notes}
        />
      ))}

      <Button
         buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 16, 
            alignSelf: 'flex-start',
            marginLeft:20,
            marginTop: 10,
            paddingHorizontal: 20,
            }}
            onPress={() => navigation.navigate('Medication')}
            title="Edit"
            titleStyle={{
              color: theme.colors.text,
              fontFamily: 'Montserrat_400Regular',
            }}/>
    </ScrollView>
   
  );
};

export default MedicationList;
{/*
<Button
  backgroundColor={theme.colors.background}
  buttonStyle={{
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
  }}
  
  onPress={() => navigation.navigate("Medication")}
  title="Add Medication"
  titleStyle={{
    color: theme.colors.text,
    fontFamily: "Montserrat_400Regular",
  }}
  /> */}