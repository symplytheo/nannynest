import React, { useCallback, useState } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Checkbox, Text, TextInput } from 'react-native-paper';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import DocumentPicker from 'react-native-document-picker';
import AppButton from '../../components/app_button';
import styles from './styles';
import { Colors } from '../../styles/colors';
const RNFS = require('react-native-fs');

const AuthUpdateProfileScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    avatar: '',
    fullname: '',
    email: '',
    dob: getToday(),
    terms: true,
  });
  const [dateModal, setDateModal] = useState(false);

  const _onSelectedChange = useCallback(
    date => {
      setForm(prev => ({ ...prev, dob: date }));
    },
    [setForm],
  );

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

  const handleNext = () => {
    navigation.navigate('auth-social');
    console.log(Object.keys(form));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={[styles.container, styles.mainContent]}>
        <Text variant="titleMedium" style={styles.title}>
          Update your profile
        </Text>
        <Text variant="labelSmall" style={styles.subtitle}>
          We just need few information
        </Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleImageUpload}>
              {form.avatar ? (
                <Avatar.Image
                  source={{ uri: form.avatar }}
                  style={styles.avatar}
                  size={80}
                />
              ) : (
                <Avatar.Icon icon="account" style={styles.avatar} size={80} />
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
              How old are you?
            </Text>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => setDateModal(true)}>
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
          <View style={styles.terms}>
            <Checkbox.Android
              status={form.terms ? 'checked' : 'unchecked'}
              onPress={() => {
                setForm(prev => ({ ...prev, terms: !prev.terms }));
              }}
            />
            <Text variant="bodyMedium">
              I agree to the Terms of Services and Privacy policy.
            </Text>
          </View>
        </View>
        <AppButton onPress={handleNext}>Continue</AppButton>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={dateModal}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={() => setDateModal(false)}>
          <View
            style={styles.modalView}
            onStartShouldSetResponder={event => true}
            onTouchEnd={e => {
              e.stopPropagation();
            }}>
            <Text style={[styles.subtitle_alt, styles.uppercase]}>
              Date of Birth
            </Text>
            <DatePicker
              options={{
                backgroundColor: Colors.background,
                textHeaderColor: Colors.onPrimaryContainer,
                selectedTextColor: Colors.onPrimary,
                mainColor: Colors.primary,
                textSecondaryColor: Colors.onPrimaryContainer,
                borderColor: Colors.background,
              }}
              mode="calendar"
              current={form.dob}
              selected={form.dob}
              onSelectedChange={_onSelectedChange}
            />

            <AppButton mode="text" onPress={() => setDateModal(false)}>
              OK
            </AppButton>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default AuthUpdateProfileScreen;
