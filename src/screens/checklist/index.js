import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import lock from '../../assets/img/lock.png';
import { Colors } from '../../styles/colors';
import { styles } from './styles';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/app_button';

const CHECKLIST = [
  'Lock away valuables',
  'Children Foods',
  'Private rooms should be locked',
  'Valuable Documents should be locked away',
  'Medications if any required',
];

const ChecklistScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <FAB
            icon="close"
            size="small"
            mode="flat"
            color={Colors.primary}
            style={styles.fab}
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.fx1}>
          <Image source={lock} style={styles.lock} />
          <Text variant="headlineSmall" style={styles.title}>
            Stay Safe and Keep your Belonging
          </Text>
          {CHECKLIST.map(v => (
            <View key={v} style={[styles.row, styles.mb24]}>
              <MCIcon name="check" size={24} color={Colors.white} />
              <Text variant="bodyLarge" style={styles.text}>
                {v}
              </Text>
            </View>
          ))}
        </View>
        <AppButton
          textColor={Colors.primary}
          buttonColor={Colors.onPrimary}
          style={styles.mb16}
          onPress={navigation.goBack}>
          I have done these
        </AppButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChecklistScreen;
