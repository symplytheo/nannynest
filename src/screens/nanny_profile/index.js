import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, View } from 'react-native';
import { Chip, FAB, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/app_button';
import { Colors } from '../../styles/colors';
import styles from './styles';

const NannyProfileScreen = ({ navigation }) => {
  const [fav, setFav] = useState(false);
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'never' }}
      edges={['right', 'bottom', 'left']}>
      {/*  */}
      <StatusBar
        translucent={true}
        backgroundColor={Colors.secondary + '55'}
        barStyle={'dark-content'}
      />
      {/*  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/img/person.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.mainContent}>
          <View style={[styles.rowBetween, { marginBottom: 16 + 0 }]}>
            <View>
              <Text variant="titleSmall" style={styles.bold}>
                Matthew, 24
              </Text>
              <View style={styles.distance}>
                <Text
                  variant="bodyMedium"
                  style={{ color: Colors.grey, marginTop: 8 + 0 }}>
                  <MCIcon size={20} name="map-marker" />
                  2km away
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{ color: Colors.grey, marginLeft: 4 + 0 }}>
                  <MCIcon size={20} name="star" color={Colors.yellow} />
                  4.8
                </Text>
              </View>
            </View>
            <Text
              variant="titleSmall"
              style={[styles.bold, { color: Colors.primary }]}>
              $5/h
            </Text>
          </View>

          <View style={styles.section}>
            <Text variant="bodyLarge" style={styles.sectionTitle}>
              About
            </Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              This is about Mary Jane not about the designer. The designer is
              not a nanny. He will do a very bad job at that. Don't hire him to
              nanny work
            </Text>
          </View>

          <View style={styles.section}>
            <Text variant="bodyLarge" style={styles.sectionTitle}>
              Categories
            </Text>
            <View style={styles.chipContainer}>
              {['Child', 'Toddler', 'Elderly', 'Disabled'].map(el => (
                <Chip key={el} textStyle={styles.chipText} style={styles.chip}>
                  {el}
                </Chip>
              ))}
            </View>
          </View>

          <View style={[styles.section, styles.rowBetween]}>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              Languages
            </Text>
            <Text variant="bodyMedium">English, Pidgin, French</Text>
          </View>

          <View style={[styles.section, styles.rowBetween]}>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              Pronouns
            </Text>
            <Text variant="bodyMedium">She/Her</Text>
          </View>

          <View style={[styles.section, styles.rowBetween]}>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              Nationality
            </Text>
            <Text variant="bodyMedium">Nigerian</Text>
          </View>

          <View style={[styles.section, styles.rowBetween]}>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              Experience
            </Text>
            <Text variant="bodyMedium">5 Years</Text>
          </View>

          <View style={[styles.section, styles.lastSection]}>
            <Text variant="bodyLarge" style={styles.sectionTitle}>
              Ratings
            </Text>
            {[1, 2, 3, 4].map(x => (
              <View key={x} style={[styles.rating, x > 1 && styles.paddingTop]}>
                <Text
                  variant="bodyMedium"
                  style={{ color: Colors.grey, marginBottom: 8 + 0 }}>
                  <MCIcon size={20} name="star" color={Colors.yellow} /> 4.{x}
                </Text>
                <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                  Again, This designer have done a very beautiful job but do not
                  ever hire for a nanny work. He's not very good at that.
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/*  */}
      <View style={styles.fabBack}>
        <FAB icon="arrow-left" customSize={40} onPress={navigation.goBack} />
      </View>
      <View style={styles.bottomBtn}>
        <FAB
          icon={fav ? 'heart' : 'heart-outline'}
          customSize={52}
          color={fav ? 'red' : Colors.black}
          onPress={() => setFav(!fav)}
        />
        <View style={styles.bookBtn}>
          <AppButton
            mode="elevated"
            buttonColor={Colors.primary}
            textColor={Colors.onPrimary}>
            Book now
          </AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NannyProfileScreen;
