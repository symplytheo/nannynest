import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from '../../components/appbutton';
import { FAB } from 'react-native-paper';
import livefeed from '../../assets/img/livefeed.png';
import { Colors } from '../../styles/colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LiveFeedScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={livefeed} style={styles.mapBg}>
        <View style={[styles.orderDate, { paddingBottom: insets.top }]}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.mb16, styles.arrow]}>
            <MCIcon name="chevron-down" size={24} />
          </TouchableOpacity>
          <View style={[styles.rowed, styles.mb16]}>
            <AppButton mode="text">Chat</AppButton>
            <AppButton
              mode="text"
              onPress={() => navigation.navigate('checklist')}>
              Checklist
            </AppButton>
          </View>
        </View>

        <View style={[styles.closeFabContainer, { top: insets.top }]}>
          <FAB
            customSize={48}
            mode="flat"
            icon="close"
            color={Colors.white}
            style={{ backgroundColor: Colors.black + '00', marginLeft: 16 + 0 }}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LiveFeedScreen;
