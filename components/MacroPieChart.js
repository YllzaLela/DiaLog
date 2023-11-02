//Simple pie chr=art component using react-native-chart-kit
import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import theme from '../config/theme';
import { Text } from 'react-native-elements';
import { Card } from '@rneui/themed'
import InputLabel from './Form/InputLabel';
import {doc, getDoc, getDocs} from "firebase/firestore";
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { db, auth } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";

const MacroPieChart = () => {
    

    const [macros, setMacros] = useState({
        protein: 0,
        carbs: 0,
        fats: 0,
        calories: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = auth.currentUser.uid; 
                const userDoc = doc(db, "User", userId); // Directly fetching the user document
                const userSnap = await getDoc(userDoc);

                if (userSnap.exists) {
                    const userData = userSnap.data(); // Get the data from the snapshot
                    if (userData && userData.macros) { // Check if the data and macros are defined
                        setMacros({
                            protein: userData.macros.protein,
                            carbs: userData.macros.carbs,
                            fats: userData.macros.fats,
                            calories: userData.macros.calories,
                        });
                    } else {
                        console.log("Macros not found in document!");
                    }
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 


    const screenWidth = Dimensions.get('window').width - 30;
    const data = [
        {
            name: 'Protein',
            value: macros.protein, // Example value for protein could be something like this: user.macros.protein
            color: theme.colors.tertiary,
            legendFontColor: theme.colors.text,
            legendFontSize: 15
        },
        {
            name: 'Carbs',
            value: macros.carbs, // Example value for carbs
            color: theme.colors.secondary,
            legendFontColor: theme.colors.text,
            legendFontSize: 15
        },
        {
            name: 'Fats',
            value: macros.fats, // Example value for fats
            color: theme.colors.gray,
            legendFontColor: theme.colors.text,
            legendFontSize: 15
        },
    ];
    const calories= 2000; // Example value for calories
    const chartConfig = {
        color: (opacity = 1) => theme.colors.background,
        labelColor: (opacity = 1) => theme.colors.text,
        style: {
            borderRadius: 16,
            alignSelf: 'center',
        },
    };

    return (
        <View style={{margin: 20,}}>   
        <Text style=
            {{
                fontSize: 20,
                fontFamily: theme.fonts.bold,
                color: theme.colors.text,
                textAlign: 'left'
            }}>Your Macros</Text>

            <View style= {{marginTop: 5, backgroundColor: theme.colors.card, borderRadius: 16}}>
            <PieChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor="value"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
            <InputLabel>Total Daily Calories: {macros.calories}</InputLabel>
            </View>
        </View>
    );
};

export default MacroPieChart;


