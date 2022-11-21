import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import map from '../../assets/img/long-map.png';
import lock from '../../assets/img/lock.png';
import AppButton from '../../components/appbutton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Divider, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';

const NannyDestinationScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.setOptions({
        headerTitle: 'Nanny has arrived',
      });
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={map} style={styles.mapBg}>
        <View style={[styles.orderDate, { paddingBottom: insets.bottom }]}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShow(!show)}
            style={[styles.mb16, styles.arrow]}>
            <MCIcon name={show ? 'chevron-down' : 'chevron-up'} size={24} />
          </TouchableOpacity>

          <View style={[styles.orderDateInputContainer, styles.mb16]}>
            <View>
              <Text variant="bodyLarge">Today</Text>
              <Text variant="headlineMedium" style={[styles.label]}>
                08:00
              </Text>
            </View>
            <AppButton mode="text" onPress={() => navigation.navigate('chat')}>
              Chat Nanny
            </AppButton>
          </View>

          {show && (
            <View>
              <TouchableOpacity
                style={[styles.safety, styles.mb16, styles.mt16]}
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
                <View style={{ flex: 1 + 0, marginHorizontal: 12 + 0 }}>
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
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default NannyDestinationScreen;
