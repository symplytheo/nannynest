import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from '../screens/dashboard';
import { Colors } from '../styles/colors';
import ProfileTabScreen from '../screens/profile';

const Tab = createMaterialBottomTabNavigator();

const Screen = ({ name }) => (
  <SafeAreaView style={styles.container}>
    <Text variant="headlineMedium">{name}</Text>
  </SafeAreaView>
);

const Orders = () => <Screen name="Orders" />;
const Search = () => <Screen name="Search" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

const SCREENS = [
  { name: 'home', icon: 'home', component: DashboardScreen },
  { name: 'search', icon: 'magnify', component: Search },
  { name: 'orders', icon: 'ticket-confirmation', component: Orders },
  { name: 'account', icon: 'account', component: ProfileTabScreen },
];

const TabNavigation = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor={Colors.primary}
      inactiveColor={Colors.grey}>
      {SCREENS.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ color }) => (
              <MCIcon name={screen.icon} color={color} size={26} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
