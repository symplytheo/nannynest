import React from 'react';
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import { styles } from './styles';
import mapImage from '../../assets/img/map.png';

const SUMMARY = [
  { label: 'Discount', value: '5%' },
  { label: 'Subtotal', value: '$2300.00' },
  { label: 'Transportation coverage', value: '$230.00' },
  { label: 'Total', value: '$2750.00' },
];

const OrderSummaryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.p16} showsVerticalScrollIndicator={false}>
        {[1, 2].map(x => (
          <View key={x} style={[styles.row, styles.rate]}>
            <Text variant="bodyMedium">2x Infants</Text>
            <Text variant="bodyMedium" style={styles.label}>
              $200
            </Text>
          </View>
        ))}
        <View style={[styles.row, styles.mb16]}>
          <AppButton mode={'text'} icon="plus" onPress={navigation.goBack}>
            Add Category
          </AppButton>
        </View>

        <TouchableOpacity
          style={[styles.bordered, styles.mb16, styles.p16]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('cancel-order-others')}>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            Add any comment for Nanny...
          </Text>
        </TouchableOpacity>

        <View style={[{ flexDirection: 'row' + '' }, styles.mb16, styles.mt16]}>
          <MCIcon size={24} color={Colors.primary} name="clock" />
          <View style={styles.dateSummary}>
            {[1, 2].map(x => (
              <View key={x} style={[styles.row, styles.rate]}>
                <Text variant="bodyMedium">Thursday, Sept. 2022</Text>
                <Text variant="bodyMedium" style={styles.label}>
                  6:00PM
                </Text>
              </View>
            ))}
          </View>
        </View>
        <Divider bold style={styles.mb16} />

        <TouchableOpacity
          style={[styles.mb16]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('map-edit')}>
          <View style={[styles.row, styles.mb16]}>
            <MCIcon name="map-marker" size={24} color={Colors.primary} />
            <Text variant="bodyMedium">5a, Ajayi Oni Street, Lagos, Nigeria</Text>
            <MCIcon name="chevron-right" size={24} color={Colors.grey} />
          </View>
          <Image source={mapImage} style={styles.map} />
        </TouchableOpacity>

        <View style={styles.mb16}>
          <Text variant="bodyLarge" style={[styles.label, styles.mb16]}>
            Summary
          </Text>
          {SUMMARY.map((el, v) => (
            <View key={el.label} style={[styles.row, styles.rate, { paddingHorizontal: 0 + 0 }]}>
              <Text
                variant={v === 3 ? 'bodyLarge' : 'bodyMedium'}
                style={[{ color: v === 3 ? Colors.black : Colors.grey }, v === 3 && styles.label]}>
                {el.label}
              </Text>
              <Text variant="bodyLarge" style={styles.label}>
                {el.value}
              </Text>
            </View>
          ))}
        </View>
        <Divider bold style={styles.mb16} />

        <View style={styles.mb16}>
          <Text variant="bodyLarge" style={[styles.label, styles.mb16]}>
            Payment Method
          </Text>
          <View style={styles.paymentRow}>
            <MCIcon name="clock-outline" size={24} color={Colors.primary} />
            <Text variant="bodyLarge" style={{ color: Colors.grey, marginHorizontal: 16 + 0 }}>
              **** 5674
            </Text>
            <AppButton mode="text" textColor={Colors.secondary}>
              Change
            </AppButton>
          </View>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            You'll be charged after nanny have marked session to be completed. Service provider fee
            may apply.
          </Text>
        </View>

        <AppButton onPress={() => navigation.navigate('order-status')}>Continue to Book</AppButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderSummaryScreen;
