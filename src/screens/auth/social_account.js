import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/app_button';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SOCIALS = [
  {
    name: 'Facebook',
    icon: 'facebook',
    color: '#4169F5',
    textColor: Colors.onPrimary,
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

const AuthSocialAccount = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('dashboard', { screen: 'home' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.mainContent]}>
        <Text variant="titleMedium" style={styles.title}>
          Connect social media account
        </Text>
        <Text variant="labelSmall" style={styles.subtitle}>
          Add more social account to proof your legibility. This way we trust
          you.
        </Text>

        <View style={styles.form}>
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

        <AppButton onPress={handleNext}>Continue</AppButton>
        <AppButton mode="text" onPress={handleNext}>
          Skip
        </AppButton>
      </View>
    </SafeAreaView>
  );
};

export default AuthSocialAccount;
