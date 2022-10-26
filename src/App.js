import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import { Provider as PaperProvider, Text } from 'react-native-paper';
import theme from './styles/theme';
import AppButton from './components/AppButton';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ backgroundColor: theme.colors.surface }}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{ padding: 1.25 + 0 }}>
            <Text variant="displayLarge">Display Large</Text>
            <Text variant="displayMedium">Display Medium</Text>
            <Text variant="displaySmall">Display small</Text>

            <Text variant="headlineLarge">Headline Large</Text>
            <Text variant="headlineMedium">Headline Medium</Text>
            <Text variant="headlineSmall">Headline Small</Text>

            <Text variant="titleLarge">Title Large</Text>
            <Text variant="titleMedium">Title Medium</Text>
            <Text variant="titleSmall">Title Small</Text>

            <Text variant="bodyLarge">Body Large</Text>
            <Text variant="bodyMedium">Body Medium</Text>
            <Text variant="bodySmall">Body Small</Text>

            <Text variant="labelLarge">Label Large</Text>
            <Text variant="labelMedium">Label Medium</Text>
            <Text variant="labelSmall">Label Small</Text>

            <AppButton
              onPress={() => console.log('hello')}
              style={{ marginTop: 16 + 0 }}>
              Get Started
            </AppButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
