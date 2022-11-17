import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import RNPickerSelect from '../../components/RNPickerSelect';
import { Colors } from '../../styles/colors';
import { styles } from './styles';

const BeneficiaryScreen = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    { category: 'Infants', age: '24' },
  ]);

  const insets = useSafeAreaInsets();

  const addField = () => {
    setBeneficiaries(prev => [...prev, { category: '', age: null }]);
  };

  const removeField = index => {
    let newArr = [...beneficiaries];
    newArr.splice(index, 1);
    setBeneficiaries(newArr);
  };

  const updateField = (index, val, field) => {
    let newArr = [...beneficiaries];
    newArr[index][field] = val;
    setBeneficiaries(newArr);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={[
          { backgroundColor: Colors.onPrimaryContainer, padding: 16 + 0 },
          styles.row,
        ]}>
        <Text variant="bodyMedium" style={{ color: Colors.white }}>
          Thu Sep 22 01:00 PM
        </Text>
        <MCIcon name="arrow-right" color={Colors.primary} size={20} />
        <Text variant="bodyMedium" style={{ color: Colors.white }}>
          Thu Sep 22 01:00 PM
        </Text>
      </View>

      <View style={styles.p16}>
        <Text variant="bodyLarge" style={[styles.label, styles.mb16]}>
          Beneficiary Info
        </Text>
        {beneficiaries.map((item, i) => (
          <View key={i} style={[styles.mb16, styles.row]}>
            <View style={{ width: '48' + '%' }}>
              <Text
                variant="bodyMedium"
                style={[styles.label, { marginBottom: 6 + 0 }]}>
                Category
              </Text>
              <RNPickerSelect
                value={item.category}
                useNativeAndroidPickerStyle={false}
                onValueChange={val => updateField(i, val, 'category')}
                items={[
                  { label: 'Infants', value: 'Infants' },
                  { label: 'Toddlers', value: 'Toddlers' },
                  { label: 'Elderly', value: 'Elderly' },
                  { label: 'Disabled', value: 'Disabled' },
                ]}
                placeholder={{ label: 'Select category', value: null }}
                style={styles.picker}
              />
            </View>
            <View style={[{ width: '48' + '%' }, styles.row]}>
              <View style={{ width: i > 0 ? '75' + '%' : '100' + '%' }}>
                <Text variant="bodyMedium" style={styles.label}>
                  Age
                </Text>
                <TextInput
                  mode="outlined"
                  style={{ height: styles.orderDateInput.height }}
                  value={item.age}
                  onChangeText={text => updateField(i, text, 'age')}
                />
              </View>
              {i > 0 && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[{ width: '20' + '%' }, styles.mt16]}
                  onPress={() => removeField(i)}>
                  <MCIcon
                    name="close"
                    size={24}
                    color={Colors.onPrimaryContainer}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}

        <AppButton
          mode="text"
          icon="plus"
          style={styles.mt16}
          onPress={addField}>
          Add category
        </AppButton>
      </View>
      <View style={[{ bottom: insets.bottom }, styles.p16, styles.totalBtn]}>
        <View style={[styles.row, styles.rate]}>
          <Text variant="bodyLarge">Rate:</Text>
          <Text variant="bodyLarge" style={styles.label}>
            $5/hr
          </Text>
        </View>
        <AppButton onPress={() => console.log('hello')}>Total $230</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default BeneficiaryScreen;
