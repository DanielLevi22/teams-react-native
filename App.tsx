import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme'
import { Groups } from '@screens/Groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native'
import { StatusBar } from 'react-native';

import { Players } from '@screens/Players';


export default function App() {
const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
          <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Players /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
