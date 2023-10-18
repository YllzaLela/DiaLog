import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Questionnaire from '/screens/Questionnaire';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './config/theme';
import { ThemeProvider } from '@rneui/themed';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
       <ThemeProvider theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Questionnaire" component={Questionnaire}/>
      </Stack.Navigator>
      </ThemeProvider> 
      </SafeAreaProvider>
    </NavigationContainer>
  );
}