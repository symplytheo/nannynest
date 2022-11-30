import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import styles from './styles';

const PaymentAddCardScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.container, styles.f1]}>
        <View style={[styles.form, styles.f1]}>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={styles.title}>
              Card number
            </Text>
            <TextInput
              mode="outlined"
              style={{ height: styles.input.height }}
            />
          </View>
          <View style={[styles.inputContainer, styles.phoneInput]}>
            <View style={styles.halfWidth}>
              <Text variant="bodyLarge" style={styles.title}>
                Expiry date
              </Text>
              <TextInput
                mode="outlined"
                style={{ height: styles.input.height }}
              />
            </View>
            <View style={styles.halfWidth}>
              <Text variant="bodyLarge" style={styles.title}>
                CVV
              </Text>
              <TextInput
                mode="outlined"
                style={{ height: styles.input.height }}
              />
            </View>
          </View>
        </View>
        <AppButton>Save card</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default PaymentAddCardScreen;
