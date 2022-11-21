import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FAB, Text } from 'react-native-paper';
import livefeed from '../../assets/img/livefeed.png';
import { Colors } from '../../styles/colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LiveFeedScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={livefeed} style={styles.mapBg}>
        <View style={[styles.orderDate, { paddingBottom: insets.top }]}>
          <TouchableOpacity activeOpacity={0.7} style={styles.arrow}>
            <MCIcon name="chevron-down" size={24} />
          </TouchableOpacity>
          <View style={[styles.rowed, styles.p16]}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.livefeedAction}
              onPress={() => navigation.navigate('chat')}>
              <MCIcon name="message-text" size={28} color={Colors.primary} />
              <Text
                variant="bodyMedium"
                style={[styles.label, { color: Colors.primary }]}>
                Chat
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.livefeedAction}
              onPress={() => navigation.navigate('checklist')}>
              <MCIcon
                name="order-bool-ascending-variant"
                size={28}
                color={Colors.primary}
              />
              <Text
                variant="bodyMedium"
                style={[styles.label, { color: Colors.primary }]}>
                Checklist
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Close Icon on Feed */}
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
