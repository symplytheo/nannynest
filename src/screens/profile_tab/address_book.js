import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const AddressBookScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {[1, 2, 3, 4].map(x => (
          <TouchableOpacity
            key={x}
            activeOpacity={0.7}
            style={[
              styles.tabActionItem,
              { justifyContent: 'space-between' + '' },
              x === 1 && { borderTopWidth: 0 + 0 },
            ]}>
            <View>
              <Text variant="bodyLarge">15a, Capt. Olajide George Str.</Text>
              <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                Lekki Phase 1
              </Text>
              <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                Lagos State
              </Text>
            </View>
            <MCIcon name="chevron-right" size={24} color={Colors.black} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default AddressBookScreen;
