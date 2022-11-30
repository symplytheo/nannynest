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
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SOCIALS = [
  {
    name: 'Connected Facebook',
    icon: 'check',
    color: '#FFF',
    textColor: Colors.green,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    color: '#FFF',
    textColor: Colors.onPrimaryContainer,
    iconColor: Colors.primary,
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    color: '#0B1129',
    textColor: Colors.onPrimary,
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    color: '#FFF',
    textColor: Colors.onPrimaryContainer,
    iconColor: Colors.secondary,
  },
];

const ProfileOverviewScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.profileOverview, styles.mb8]}>
          <Image source={person} style={styles.dp} />
          <View style={{ marginHorizontal: 16 + 0 }}>
            <Text variant="bodyLarge" style={styles.bold}>
              Matthew Ola Olukoju
            </Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              +234 816 770 2086
            </Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              matthewola@gmail.com
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.75}
            style={{ marginLeft: 'auto' + '' }}
            onPress={() => navigation.navigate('update-profile')}>
            <MCIcon name="pencil" color={Colors.primary} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.socials}>
          <Text
            variant="bodyLarge"
            style={[{ fontWeight: 500 + '' }, styles.mb8]}>
            Connected account
          </Text>
          <View style={styles.mt8}>
            {SOCIALS.map(social => (
              <AppButton
                key={social.icon}
                buttonColor={social.color}
                textColor={social.textColor}
                style={styles.socialBtn}
                icon={({ color }) => (
                  <MCIcon
                    name={social.icon}
                    size={24}
                    color={social.iconColor || color}
                  />
                )}>
                {social.name}
              </AppButton>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileOverviewScreen;
