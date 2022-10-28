import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import AppButton from '../../components/app_button';
import styles from './styles';

const AuthPhoneNumberScreen = ({ navigation }) => {
  const [countryModal, setCountryModal] = useState(false);
  const [phone, setPhone] = useState(null);
  const [code, setCode] = useState('234');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [flag, setFlag] = useState('nga');

  const onSelect = country => {
    setCountryModal(false);
    setCode(country.callingCode[0]);
    setFlag(country.cca2.toLowerCase());
  };

  useEffect(() => {
    setPhoneNumber(`+${code}${phone}`);
  }, [phone, code]);

  const handleNext = () => {
    navigation.navigate('auth-otp', { phone: phoneNumber });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.mainContent]}>
        <Text variant="titleMedium" style={styles.title}>
          Enter your phone number
        </Text>
        <Text variant="labelSmall" style={styles.subtitle}>
          You’ll receive a 6-digit confirmation code
        </Text>
        <View style={styles.phoneInput}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.country}
            onPress={() => setCountryModal(true)}>
            <View pointerEvents="none">
              <TextInput
                mode="outlined"
                left={
                  <TextInput.Icon
                    icon={() => (
                      <Image
                        source={{
                          uri: `https://countryflagsapi.com/png/${flag}`,
                        }}
                        style={styles.flag}
                      />
                    )}
                  />
                }
                editable={false}
                style={styles.input}
                value={code}
              />
            </View>
          </TouchableOpacity>
          <TextInput
            value={phone}
            mode="outlined"
            placeholder="phone number"
            style={styles.number}
            keyboardType="phone-pad"
            onChangeText={v => setPhone(v)}
          />
        </View>
        <AppButton onPress={handleNext}>Continue</AppButton>
      </View>

      {countryModal && (
        <CountryPicker
          onSelect={onSelect}
          onClose={() => setCountryModal(false)}
          withFlag
          withFilter
          visible={countryModal}
          placeholder={null}
          withCallingCode
          withAlphaFilter
        />
      )}
    </SafeAreaView>
  );
};

export default AuthPhoneNumberScreen;
