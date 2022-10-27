import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, FAB } from 'react-native-paper';
import { Colors } from '../styles/colors';
import AppSplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import AuthPhoneNumberScreen from '../screens/auth/phone_number';
import AuthOtpScreen from '../screens/auth/otp';
import AuthUpdateProfileScreen from '../screens/auth/update_profile';
// import AuthSocialAccount from '../screens/auth/social_account';

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
        <Stack.Screen name="auth-otp" component={AuthOtpScreen} />
        <Stack.Screen name="auth-profile" component={AuthUpdateProfileScreen} />
        {/* <Stack.Screen name="auth-social" component={AuthSocialAccount} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
