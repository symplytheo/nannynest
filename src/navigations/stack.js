import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, FAB } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
import ChecklistScreen from '../screens/checklist';
import OrderDateTimeModalScreen from '../screens/ordering/date_time_modal';
import BeneficiaryScreen from '../screens/ordering/beneficiary';
import OrderSummaryScreen from '../screens/ordering/order_summary';
import OrderStatusScreen from '../screens/ordering/order_status';
import NannyDestinationScreen from '../screens/ordering/nanny_destination';
import OrderMapEditScreen from '../screens/ordering/map_edit';
import LiveFeedScreen from '../screens/ordering/livefeed';
import ChatScreen from '../screens/ordering/chat';
import AboutScreen from '../screens/profile_tab/about';
import AddressBookScreen from '../screens/profile_tab/address_book';
import ProfileOverviewScreen from '../screens/profile_tab/profile';
import AccountUpdateProfileScreen from '../screens/profile_tab/update_profile';
import PaymentMethodScreen from '../screens/profile_tab/payment';
import PaymentAddCardScreen from '../screens/profile_tab/payment_addcard';
import OrderDetails from '../screens/myorder/details';
import RateNannyScreen from '../screens/ordering/rate_nanny';
import SearchFilterScreen from '../screens/search/filter';
import HelpScreen from '../screens/profile_tab/help';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
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
        <Stack.Screen name="checklist" component={ChecklistScreen} />
        <Stack.Screen
          name="order-datetime"
          options={{ presentation: 'transparentModal' }}
          component={OrderDateTimeModalScreen}
        />
        <Stack.Screen
          name="order-status"
          options={{ presentation: 'transparentModal' }}
          component={OrderStatusScreen}
        />
        <Stack.Screen name="map-edit" component={OrderMapEditScreen} />
        <Stack.Screen name="livefeed" component={LiveFeedScreen} />
        <Stack.Screen
          name="rate-nanny"
          options={{ presentation: 'transparentModal' }}
          component={RateNannyScreen}
        />
        <Stack.Screen name="search-filter" component={SearchFilterScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerTitle: '',
          headerTitleStyle: { fontFamily: 'Montserrat', fontWeight: '600' },
        }}>
        <Stack.Screen name="beneficiary" component={BeneficiaryScreen} />
        <Stack.Screen name="order-summary" component={OrderSummaryScreen} />
        <Stack.Screen
          name="nanny-destination"
          component={NannyDestinationScreen}
          options={{
            headerTitle: 'Nanny is on their way to you',
            headerTitleStyle: {
              fontWeight: '400',
              fontFamily: 'Montserrat',
              fontSize: 14,
            },
          }}
        />
        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{
            headerTitle: 'Chat',
            headerLeft: () => (
              <TouchableOpacity activeOpacity={0.7}>
                <MCIcon name="close" color={Colors.black} size={24} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7}>
                <MCIcon name="phone" color={Colors.black} size={24} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="about"
          component={AboutScreen}
          options={{ headerTitle: 'About' }}
        />
        <Stack.Screen
          name="address-book"
          component={AddressBookScreen}
          options={{ headerTitle: 'Address Book' }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileOverviewScreen}
          options={{ headerTitle: 'Profile' }}
        />
        <Stack.Screen
          name="update-profile"
          component={AccountUpdateProfileScreen}
          options={{ headerTitle: 'Update Profile' }}
        />
        <Stack.Screen
          name="payment"
          component={PaymentMethodScreen}
          options={{ headerTitle: 'Payment' }}
        />
        <Stack.Screen
          name="payment-addcard"
          component={PaymentAddCardScreen}
          options={{ headerTitle: 'Add Card' }}
        />
        <Stack.Screen name="order-details" component={OrderDetails} />
        <Stack.Screen
          name="help"
          component={HelpScreen}
          options={{ headerTitle: 'Help' }}
        />
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
