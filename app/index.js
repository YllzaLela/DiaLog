import { Text } from 'react-native';
import Login from './Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { theme } from '../config/theme';
export default function Page() {
  return ( 
  <SafeAreaProvider>
    <ThemeProvider theme={theme}>
        <Login/>
    </ThemeProvider>
  </SafeAreaProvider>
  );
}