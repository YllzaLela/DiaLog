import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { theme } from '../config/theme'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import MedicationCard from '../components/MedicationCard'

export default function Home({ navigation })
{
    return (
        <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background}}>
        <ScrollView>
            <MedicationCard
            time={'8:00 AM'}
            medicationName={'Miri'}
            dosage={'200mg'}
            notes={'Take with food'}/>
        </ScrollView> 
        </SafeAreaView>
        </SafeAreaProvider>
    );
}