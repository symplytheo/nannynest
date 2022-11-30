import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Text, TextInput } from 'react-native-paper';
import { getToday } from 'react-native-modern-datepicker';
import DocumentPicker from 'react-native-document-picker';
import CountryPicker from 'react-native-country-picker-modal';
import AppButton from '../../components/appbutton';
import styles from './styles';

const RNFS = require('react-native-fs');

const AccountUpdateProfileScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    avatar: '',
    fullname: '',
    email: '',
    dob: getToday(),
  });

  const [countryModal, setCountryModal] = useState(false);
  const [phone, setPhone] = useState(null);
  const [code, setCode] = useState('234');
  const [flag, setFlag] = useState('nga');

  const onSelect = country => {
    setCountryModal(false);
    setCode(country.callingCode[0]);
    setFlag(country.cca2.toLowerCase());
  };

  const handleImageUpload = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: DocumentPicker.types.images,
        copyTo: 'documentDirectory',
      });
      const filePath = decodeURI(file.fileCopyUri);
      const b64 = await RNFS.readFile(filePath, 'base64');
      const image_b64 = `data:${file.type};base64,${b64}`;
      setForm({ ...form, avatar: image_b64 });
      //
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancel');
      } else {
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleImageUpload}>
              {form.avatar ? (
                <Image
                  source={{ uri: form.avatar }}
                  style={[styles.avatar, styles.dp]}
                />
              ) : (
                <Avatar.Icon
                  icon="account"
                  style={[styles.avatar, styles.dp]}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text
              variant="bodyLarge"
              style={[styles.title, { marginBottom: 4 + 0 }]}>
              Full name
            </Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your fullname"
              style={{ height: styles.input.height }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text
              variant="bodyLarge"
              style={[styles.title, { marginBottom: 4 + 0 }]}>
              Phone Number
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
          </View>
          <View style={styles.inputContainer}>
            <Text
              variant="bodyLarge"
              style={[styles.title, { marginBottom: 4 + 0 }]}>
              Email address
            </Text>
            <TextInput
              mode="outlined"
              placeholder="Valid email"
              style={{ height: styles.input.height }}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text
              variant="bodyLarge"
              style={[styles.title, { marginBottom: 4 + 0 }]}>
              Date of Birth
            </Text>
            <TouchableOpacity activeOpacity={0.75}>
              <View pointerEvents="none">
                <TextInput
                  mode="outlined"
                  placeholder="YYYY/MM/DD"
                  style={{ height: styles.input.height }}
                  left={<TextInput.Icon icon="calendar-blank" />}
                  editable={false}
                  value={form.dob}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <AppButton onPress={navigation.goBack}>Update Profile</AppButton>
      </ScrollView>

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

export default AccountUpdateProfileScreen;
