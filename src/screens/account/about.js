import React from 'react';
import { Alert, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const AboutScreen = () => {
  const ITEMS = [
    {
      text: 'Version 1.2',
      subtext: 'Your app is up to date',
      action: () => Alert.alert('Version 1.2', 'Your app is up to date'),
    },
    { text: 'Rate this app', action: () => {} },
    { text: 'Licenses', action: () => {} },
    { text: 'Legal', action: () => {} },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {ITEMS.map(item => (
          <TouchableOpacity
            key={item.text}
            activeOpacity={0.7}
            onPress={item.action}
            style={[
              styles.tabActionItem,
              { justifyContent: 'space-between' + '' },
              item.subtext && { borderTopWidth: 0 + 0 },
            ]}>
            <View>
              <Text variant="bodyLarge" style={item.subtext && [styles.bold, styles.mb8]}>
                {item.text}
              </Text>
              {item.subtext && (
                <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                  {item.subtext}
                </Text>
              )}
            </View>
            <MCIcon name="chevron-right" size={24} color={Colors.black} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
