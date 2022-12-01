import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from '../screens/dashboard';
import { Colors } from '../styles/colors';
import ProfileTabScreen from '../screens/profile_tab';
import MyOrdersScreen from '../screens/myorder';
import SearchScreen from '../screens/search';

const Tab = createMaterialBottomTabNavigator();

const SCREENS = [
  { name: 'home', icon: 'home', component: DashboardScreen },
  { name: 'search', icon: 'magnify', component: SearchScreen },
  { name: 'orders', icon: 'ticket-confirmation', component: MyOrdersScreen },
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
