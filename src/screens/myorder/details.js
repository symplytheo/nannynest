import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SUMMARY = [
  { label: 'Discount', value: '-5%' },
  { label: 'Subtotal', value: '$2300.00' },
  { label: 'Transportation coverage', value: '$230.00' },
  { label: 'Total', value: '$2750.00' },
];

const OrderDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="bodyMedium" style={[{ color: Colors.grey }, styles.mb8]}>
          04 Oct, 2022 10:13AM {'  '}
          <Text variant="bodyMedium" style={{ color: Colors.green }}>
            Completed
          </Text>
        </Text>

        <View style={[styles.rowCentered, styles.mb8, styles.mt8]}>
          <MCIcon name="cash-multiple" size={20} color={Colors.primary} />
          <Text
            variant="bodyMedium"
            style={[{ color: Colors.primary }, styles.ml16]}>
            $300 received by nanny
          </Text>
        </View>

        <View style={[styles.rowCentered, { marginVertical: 16 + 0 }]}>
          <Image source={person} style={styles.dp} />
          <View style={styles.ml16}>
            <Text variant="bodyLarge" style={{ fontWeight: 600 + '' }}>
              Matthew, 24
            </Text>
            <View style={styles.rowCentered}>
              <MCIcon name="map-marker" color={Colors.grey} size={20} />
              <Text
                variant="bodyMedium"
                style={[{ color: Colors.grey }, styles.mb8]}>
                2km away
              </Text>
              <MCIcon name="star" color={Colors.yellow} size={20} />
              <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                4.8
              </Text>
            </View>
          </View>
        </View>

        <Divider style={{ backgroundColor: Colors.grey }} />

        <View style={[styles.rowCentered, styles.section]}>
          <MCIcon name="map-marker" color={Colors.primary} size={24} />
          <Text variant="bodyMedium" style={styles.ml16}>
            5a, Ajayi Oni Street, Lagos, Nigeria
          </Text>
        </View>

        <Divider style={{ backgroundColor: Colors.grey }} />

        <View style={styles.section}>
          <Text variant="bodyLarge" style={[styles.title, styles.mb8]}>
            Summary
          </Text>
          {SUMMARY.map((el, v) => (
            <View
              key={el.label}
              style={[
                styles.rowCentered,
                styles.mb8,
                { justifyContent: 'space-between' + '' },
              ]}>
              <Text
                variant="bodyMedium"
                style={[
                  { color: v === 3 ? Colors.black : Colors.grey },
                  v === 3 && { fontWeight: 500 + '' },
                ]}>
                {el.label}
              </Text>
              <Text
                variant="bodyMedium"
                style={v === 3 && { fontWeight: 500 + '' }}>
                {el.value}
              </Text>
            </View>
          ))}
        </View>

        <Divider style={{ backgroundColor: Colors.grey }} />

        <View style={styles.section}>
          <Text variant="bodyLarge" style={[styles.title, styles.mb8]}>
            Order Id
          </Text>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            We3525hy
          </Text>
        </View>

        <Divider style={{ backgroundColor: Colors.grey }} />

        <View style={styles.section}>
          <Text variant="bodyLarge" style={[styles.title, styles.mb8]}>
            Payment method
          </Text>
          <View style={styles.rowCentered}>
            <MCIcon name="cash-multiple" size={20} color={Colors.black} />
            <Text
              variant="bodyMedium"
              style={[{ color: Colors.grey }, styles.ml16]}>
              **** 5674
            </Text>
          </View>
        </View>

        <Divider style={[{ backgroundColor: Colors.grey }, styles.mb8]} />

        <AppButton
          style={styles.mt8}
          onPress={() => navigation.navigate('order-summary')}>
          Order nanny again
        </AppButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;
