import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import { styles } from './styles';

const REASONS = [
  'Accidental request',
  'Nanny not responding',
  'Rude behaviour',
  'Profile not matching',
  'Cost is too high',
  'Delayed request',
  'Others',
];

const CancellationScreen = ({ navigation }) => {
  const [reason, setReason] = useState('');

  useEffect(() => {
    if (reason === 'Others') {
      navigation.navigate('cancel-order-others');
      setReason('');
    }
  }, [reason, navigation]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Text variant="titleSmall" style={styles.title}>
            Reason for cancellation
          </Text>
          <RadioButton.Group onValueChange={v => setReason(v)} value={reason}>
            {REASONS.map(el => (
              <View key={el} style={styles.radio}>
                <RadioButton.Android value={el} />
                <Text variant="bodyMedium">{el}</Text>
              </View>
            ))}
          </RadioButton.Group>
        </View>
        <AppButton>Submit</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default CancellationScreen;
