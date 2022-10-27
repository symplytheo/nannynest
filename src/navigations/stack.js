import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppSplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import AuthPhoneNumberScreen from '../screens/auth/phone_number';
import { Appbar, FAB } from 'react-native-paper';
import { Colors } from '../styles/colors';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={AppSplashScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          header: ({ navigation, back }) => (
            <Appbar.Header style={{ backgroundColor: Colors.background }}>
              {back ? (
                <FAB
                  customSize={48}
                  mode="flat"
                  icon="arrow-left"
                  style={{ borderRadius: 8 + 0, marginLeft: 10 + 0 }}
                  onPress={navigation.goBack}
                />
              ) : null}
            </Appbar.Header>
          ),
        }}>
        <Stack.Screen name="auth-phone" component={AuthPhoneNumberScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
