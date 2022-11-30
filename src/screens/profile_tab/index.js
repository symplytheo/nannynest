import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import { Colors } from '../../styles/colors';
import styles from './styles';

const ProfileTabScreen = ({ navigation }) => {
  const SCREENS = [
    { icon: 'cash-multiple', text: 'Payment', route: 'payment' },
    { icon: 'account', text: 'Profile', route: 'profile' },
    { icon: 'map-marker', text: 'Address book', route: 'address-book' },
    { icon: 'cog', text: 'Settings', route: '' },
    { icon: 'information', text: 'About', route: 'about' },
    { icon: 'help-circle', text: 'Help', route: '' },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={person} style={[styles.dp, styles.mb8]} />
        <Text variant="bodyLarge" style={styles.bold}>
          Matthew Ola Olukoju
        </Text>
        <Text variant="bodyMedium" style={[{ color: Colors.grey }, styles.mb8]}>
          +234 816 770 2086
        </Text>
        <View style={{ marginVertical: 8 + 0 }}>
          {SCREENS.map(screen => (
            <TouchableOpacity
              key={screen.text}
              activeOpacity={0.7}
              style={styles.tabActionItem}
              onPress={
                screen.route
                  ? () => navigation.navigate(screen.route)
                  : () => {}
              }>
              <MCIcon
                name={screen.icon}
                style={{ marginRight: 16 + 0 }}
                size={24}
                color={Colors.primary}
              />
              <Text variant="bodyMedium">{screen.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTabScreen;
