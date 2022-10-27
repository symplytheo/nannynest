import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppSplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={AppSplashScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
