import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import AppButton from '../../components/app_button';
import OTPTextView from './components/otp_text_view';
import { Colors } from '../../styles/colors';
import styles from './styles';

const AuthOtpScreen = ({ route, navigation }) => {
  const { phone } = route.params;
  const [otp, setOtp] = useState('');

  const handleNext = () => {
    navigation.navigate('auth-profile');
    console.log({ otp });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.mainContent]}>
        <Text variant="titleMedium" style={styles.title}>
          Enter OTP
        </Text>
        <Text variant="labelSmall" style={styles.subtitle}>
          {`We’ve just sent ${phone} an OTP`}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Text variant="bodyLarge" style={styles.subtitle_alt}>
            Wrong number?
          </Text>
        </TouchableOpacity>
        <View style={[styles.phoneInput, styles.otp]}>
          <OTPTextView
            defaultValue={otp}
            tintColor={Colors.primary}
            inputCount={4}
            textInputStyle={styles.roundedTextInput}
            selectionColor={Colors.secondary}
            handleTextChange={v => setOtp(v)}
          />
        </View>
        <AppButton onPress={handleNext}>Next</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default AuthOtpScreen;
