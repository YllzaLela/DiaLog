import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MedicationCard from "./MedicationCard";
import theme from "../config/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import userMedications from "../dummyData";
const MedicationList = () => {
    const navigation = useNavigation();
    // Placeholder data for today's medication
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
      {userMedications.map((medication) => (
        <MedicationCard
          key={medication.id}
          medicationName={medication.name}
          dosage={medication.dosage}
          dosageUnit={medication.dosageUnit}
          time={medication.time}
          notes={medication.note}
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
