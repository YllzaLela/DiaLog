import React from 'react'
import { theme } from '../config/theme'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import MedicationCard from '../components/MedicationCard'
import GlucoseChart from '../components/GlucoseChart'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native';
import { Card, Text } from '@rneui/themed'
import MacroPieChart from '../components/MacroPieChart'
import MedicationList from '../components/MedicationList'

export default function Home()
{


    return (
        <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background}}>
        <ScrollView>
            {/* Glucose line chart */}
            <GlucoseChart/> 


            {/* Macro wheel chart */}
            <MacroPieChart />

            {/* Medication list */}
            <MedicationList />

        
        </ScrollView> 
        </SafeAreaView>
        </SafeAreaProvider>
    );
}