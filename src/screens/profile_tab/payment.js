import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const PaymentMethodScreen = ({ navigation }) => {
  const [method, setMethod] = useState('cash');
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="bodyLarge" style={[styles.title, styles.mb8]}>
          Payment Method
        </Text>
        <View style={[styles.mb8, styles.mt8]}>
          <RadioButton.Group onValueChange={v => setMethod(v)} value={method}>
            <View style={[styles.profileOverview, styles.mb8]}>
              <MCIcon name="cash-multiple" color={Colors.primary} size={24} />
              <Text variant="bodyMedium" style={styles.method}>
                Cash
              </Text>
              <RadioButton.Android value="cash" />
            </View>
          </RadioButton.Group>

          <View style={[styles.mt8, styles.profileOverview]}>
            <AppButton
              icon="plus"
              mode="text"
              textColor={Colors.primary}
              onPress={() => navigation.navigate('payment-addcard')}>
              Add debit/credit card
            </AppButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;
