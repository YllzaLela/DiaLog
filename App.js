import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Questionnaire from './screens/Questionnaire';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './config/theme';
import { ThemeProvider } from '@rneui/themed';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
       <ThemeProvider theme={theme}>
      <Stack.Navigator
      screenOptions=
      {
        {
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Questionnaire" component={Questionnaire}/>
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerLeft: ()=> null,
        }}/>
      </Stack.Navigator>
      </ThemeProvider> 
      </SafeAreaProvider>
    </NavigationContainer>
  );
}