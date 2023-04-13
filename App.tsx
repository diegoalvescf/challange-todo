import theme from '@/common/theme/theme';
import { LoadingComponent } from '@/presentation/jsx/components/loading-component';

import { HomeScreen } from '@/presentation/jsx/screens/home';
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      {fontsLoaded ? <HomeScreen /> : <LoadingComponent />}
    </ThemeProvider>
  );
}
