import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const MyOrdersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text variant="bodyLarge" style={[styles.title, styles.container]}>
        My Orders
      </Text>
      <ScrollView contentContainerStyle={styles.container}>
        {[...Array(10)].map((_, i) => (
          <View
            key={i}
            style={[
              { paddingVertical: styles.container.padding },
              i && styles.topBordered,
            ]}>
            <View style={styles.rowCentered}>
              <View style={{ flex: 1 + 0 }}>
                <View style={styles.rowCentered}>
                  <Image source={person} style={styles.dp} />
                  <View style={styles.ml16}>
                    <Text variant="bodyMedium">Matthew, 24</Text>
                    <Text variant="bodyMedium">$300</Text>
                  </View>
                </View>
                <Text variant="bodySmall" style={styles.timestamp}>
                  04 Oct, 2022 10:13AM {'  '} Completed
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.ml16}
                onPress={() => navigation.navigate('order-details')}>
                <MCIcon name="reload" size={24} color={Colors.black} />
              </TouchableOpacity>
            </View>
            {!i && (
              <AppButton style={{ marginTop: 16 + 0 }}>Rate Order</AppButton>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrdersScreen;
