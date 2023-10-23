import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Questionnaire from './screens/Questionnaire';
import Home from './screens/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import theme from './config/theme';
import { ThemeProvider } from '@rneui/themed';
import * as Font from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import HomeDrawer from './components/HomeDrawer';
import GlucoseLog from './screens/GlucoseLog';




const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Montserrat_400Regular,
        Montserrat_700Bold,
        Montserrat_600SemiBold,
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);
  if (!fontLoaded) {
    return null; //Or return loading component or splash screen
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider >
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background}}>
       <ThemeProvider theme={theme}>
      <Stack.Navigator
      screenOptions=
      {
        {
          headerStyle: {
            backgroundColor: theme.colors.background,
             // remove the border
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontFamily: 'Montserrat_400Regular',
            fontSize: theme.fonts.sizes.xlarge,
          },
       
        }
      }>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Questionnaire" component={Questionnaire}/> 
        <Stack.Screen name="Home" component={HomeDrawer} 
        options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>


      
      </ThemeProvider> 
      </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}