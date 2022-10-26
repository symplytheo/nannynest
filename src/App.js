import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/theme';
import SplashScreen from 'react-native-splash-screen';
import AppSplashScreen from './screens/splash';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <AppSplashScreen />
    </PaperProvider>
  );
};

export default App;
