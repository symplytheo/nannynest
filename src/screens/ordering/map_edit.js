import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from '../../components/appbutton';
import { FAB, Text, TextInput } from 'react-native-paper';
import map from '../../assets/img/long-map.png';
import { Colors } from '../../styles/colors';

const OrderMapEditScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={map} style={styles.mapBg}>
        <View style={[styles.orderDate, { paddingBottom: insets.top }]}>
          <Text
            variant="bodyLarge"
            style={[{ textAlign: 'center' + '' }, styles.label, styles.mb16]}>
            Choose meet point address
          </Text>

          <View style={styles.mb16}>
            <TextInput
              style={{ height: styles.orderDateInput.height }}
              mode="outlined"
            />
            <AppButton
              style={[styles.mt16, styles.mb16]}
              onPress={navigation.goBack}>
              Confirm address
            </AppButton>
          </View>
        </View>

        <View style={[styles.closeFabContainer, { top: insets.top }]}>
          <FAB
            customSize={48}
            mode="flat"
            icon="close"
            color={Colors.black}
            style={styles.closeFab}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OrderMapEditScreen;
