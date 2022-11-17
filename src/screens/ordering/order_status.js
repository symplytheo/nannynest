import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Divider, FAB, ProgressBar, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import { styles } from './styles';
import lock from '../../assets/img/lock.png';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderStatusScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('accepted');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={navigation.goBack}
      style={styles.transContainer}>
      <View
        style={[styles.orderDate, { paddingBottom: insets.bottom }]}
        onStartShouldSetResponder={event => true}
        onTouchEnd={e => {
          e.stopPropagation();
        }}>
        {status === 'pending' && (
          <View style={styles.mb16}>
            <Text
              variant="bodyLarge"
              style={[{ textAlign: 'center' + '' }, styles.label, styles.mb16]}>
              Waiting for your Nanny to accept order
            </Text>
            <ProgressBar
              progress={0.5}
              color={Colors.secondary}
              indeterminate
            />
          </View>
        )}

        {(status === 'accepted' || status === 'rejected') && (
          <View>
            <View
              style={[styles.paymentRow, { justifyContent: 'center' + '' }]}>
              <FAB
                icon={status === 'accepted' ? 'check' : 'cancel'}
                customSize={72}
                color={status === 'accepted' ? Colors.green : Colors.red}
                style={{
                  backgroundColor:
                    (status === 'accepted' ? Colors.green : Colors.red) + '30',
                  borderRadius: 40 + 0,
                }}
                mode="flat"
              />
            </View>
            <Text
              variant="bodyLarge"
              style={[
                styles.mb16,
                styles.label,
                {
                  color: status === 'accepted' ? Colors.green : Colors.red,
                  textAlign: 'center' + '',
                },
              ]}>
              Your order has been {status}
            </Text>
          </View>
        )}

        <Text
          variant="bodyMedium"
          style={[
            styles.mb16,
            { textAlign: 'center' + '', color: Colors.grey },
          ]}>
          {status === 'accepted' ? 'Estimated time' : 'Avg. Response time'}
          {': '}
          <Text variant="bodyMedium" style={{ color: Colors.black }}>
            20min
          </Text>
        </Text>

        <TouchableOpacity
          style={[styles.safety, styles.mb16]}
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
            navigation.navigate('checklist');
          }}>
          <Image source={lock} style={styles.safetyImage} />
          <Text
            variant="bodyLarge"
            style={[styles.label, { color: Colors.white }]}>
            Read safety measure
          </Text>
        </TouchableOpacity>

        <Divider bold style={styles.mb16} />
        <TouchableOpacity activeOpacity={0.7}>
          <View style={[styles.row, styles.mb16]}>
            <MCIcon name="map-marker" size={24} color={Colors.primary} />
            <Text variant="bodyMedium">
              5a, Ajayi Oni Street, Lagos, Nigeria
            </Text>
            <MCIcon name="chevron-right" size={24} color={Colors.grey} />
          </View>
        </TouchableOpacity>
        <Divider bold style={styles.mb16} />

        <View style={[styles.paymentRow, styles.mb16]}>
          <MCIcon name="cash-multiple" size={28} color={Colors.primary} />
          <View style={[styles.dateSummary, { marginHorizontal: 12 + 0 }]}>
            <Text variant="bodyLarge">$230</Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              Card payment
            </Text>
          </View>
          <AppButton mode="text" textColor={Colors.secondary}>
            Change
          </AppButton>
        </View>
        <Divider bold style={styles.mb16} />

        <View>
          {status === 'accepted' ? (
            <AppButton
              style={styles.mb16}
              onPress={() => {
                navigation.goBack();
                navigation.navigate('nanny-destination');
              }}>
              Continue
            </AppButton>
          ) : status === 'rejected' ? (
            <AppButton
              style={styles.mb16}
              onPress={() => {
                navigation.goBack();
                navigation.navigate('dashboard');
              }}>
              Make new order
            </AppButton>
          ) : null}
          <AppButton
            mode="text"
            onPress={() => {
              navigation.goBack();
              navigation.navigate('cancel-order');
            }}>
            Cancel
          </AppButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderStatusScreen;
