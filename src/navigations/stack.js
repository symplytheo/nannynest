import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../styles/colors';
import AppSplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import AuthPhoneNumberScreen from '../screens/auth/phone_number';
import AuthOtpScreen from '../screens/auth/otp';
import AuthUpdateProfileScreen from '../screens/auth/update_profile';
import AuthSocialAccount from '../screens/auth/social_account';
import NannyProfileScreen from '../screens/nanny';
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
import AboutScreen from '../screens/account/about';
import AddressBookScreen from '../screens/account/address_book';
import ProfileOverviewScreen from '../screens/account/profile';
import AccountUpdateProfileScreen from '../screens/account/update_profile';
import PaymentMethodScreen from '../screens/account/payment';
import PaymentAddCardScreen from '../screens/account/payment_addcard';
import OrderDetails from '../screens/myorder/details';
import RateNannyScreen from '../screens/ordering/rate_nanny';
import SearchFilterScreen from '../screens/search/filter';
import HelpScreen from '../screens/account/help';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={AppSplashScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="dashboard" component={TabNavigation} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerLeft: ({ canGoBack }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.fab}
              onPress={canGoBack ? navigation.goBack : () => {}}>
              <MCIcon name="arrow-left" color={Colors.black} size={24} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: { backgroundColor: Colors.background },
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="auth-phone" component={AuthPhoneNumberScreen} />
        <Stack.Screen name="auth-otp" component={AuthOtpScreen} />
        <Stack.Screen name="auth-profile" component={AuthUpdateProfileScreen} />
        <Stack.Screen name="auth-social" component={AuthSocialAccount} />
        <Stack.Screen name="cancel-order" component={CancellationScreen} />
        <Stack.Screen name="cancel-order-others" component={CancellationOthersScreen} />
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
          headerTitleStyle: { fontFamily: 'Montserrat-SemiBold', fontWeight: '600' },
        }}>
        <Stack.Screen name="beneficiary" component={BeneficiaryScreen} />
        <Stack.Screen name="order-summary" component={OrderSummaryScreen} />
        <Stack.Screen
          name="nanny-destination"
          component={NannyDestinationScreen}
          options={{
            headerTitle: 'Nanny is on their way to you',
            headerTitleStyle: {
              fontWeight: '500',
              fontFamily: 'Montserrat-Medium',
              fontSize: 14,
            },
          }}
        />
        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{
            headerTitleAlign: 'center',
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
        <Stack.Screen name="about" component={AboutScreen} options={{ headerTitle: 'About' }} />
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
        <Stack.Screen name="help" component={HelpScreen} options={{ headerTitle: 'Help' }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  fab: {
    borderRadius: 8,
    backgroundColor: Colors.primaryContainer,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StackNavigation;
