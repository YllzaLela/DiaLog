import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../config/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MedicationCard = ({ medicationName, dosage, dosageUnit, time, notes }) => {
  return (

      <Card
        containerStyle={{
          borderRadius: 16,
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          marginTop:5,
        }}
      > 
        <View style={{flexDirection:'row', alignItems:"center"}}>
            <View style={{margin: 5}}>
         <MaterialCommunityIcons name="pill" size={24} color= {theme.colors.primary}/>
         </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.smallText}>Time: {time}</Text>
            <Text
              style={{ fontFamily:theme.fonts.bold, color:theme.colors.text }}
            >
             Name: {medicationName} 
            </Text>

            <Text style={{ fontFamily: theme.fonts.bold, color: theme.colors.text }}>
                Dosage: {dosage} {dosageUnit}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="exclamation-circle"
                size={16}
                color={theme.colors.tertiary}
              />
              <Text style={styles.smallText}>Notes: {notes}</Text>
            </View>
          </View>
          </View>
      </Card>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    margin: 5,
  },
  smallText: {
    fontSize: 14,
    margin: 5,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
});

export default MedicationCard;


