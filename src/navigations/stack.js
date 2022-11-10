import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, FAB } from 'react-native-paper';
import { Colors } from '../styles/colors';
import AppSplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import AuthPhoneNumberScreen from '../screens/auth/phone_number';
import AuthOtpScreen from '../screens/auth/otp';
import AuthUpdateProfileScreen from '../screens/auth/update_profile';
import AuthSocialAccount from '../screens/auth/social_account';
import NannyProfileScreen from '../screens/nanny_profile';
import TabNavigation from './tab';
import CancellationScreen from '../screens/cancellation';
import CancellationOthersScreen from '../screens/cancellation/others';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={AppSplashScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="dashboard" component={TabNavigation} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          header: ({ navigation, back, options }) => (
            <Appbar.Header style={styles.header}>
              {back ? (
                <FAB
                  customSize={48}
                  mode="flat"
                  icon="arrow-left"
                  style={styles.fab}
                  onPress={navigation.goBack}
                />
              ) : null}
              <Appbar.Content title={options.title} titleStyle={styles.title} />
            </Appbar.Header>
          ),
          headerTitle: null,
        }}>
        <Stack.Screen name="auth-phone" component={AuthPhoneNumberScreen} />
        <Stack.Screen name="auth-otp" component={AuthOtpScreen} />
        <Stack.Screen name="auth-profile" component={AuthUpdateProfileScreen} />
        <Stack.Screen name="auth-social" component={AuthSocialAccount} />
        <Stack.Screen name="cancel-order" component={CancellationScreen} />
        <Stack.Screen
          name="cancel-order-others"
          component={CancellationOthersScreen}
        />
      </Stack.Group>

      {/* Ordering Nanny Stacks */}
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="nanny" component={NannyProfileScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: { backgroundColor: Colors.background },
  fab: { borderRadius: 8, marginLeft: 10 },
  title: { fontSize: 18, fontWeight: '600' },
});

export default StackNavigation;
