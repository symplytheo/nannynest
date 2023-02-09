import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, View } from 'react-native';
import { Chip, FAB, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';
import { NANNIES } from '../../assets/js/data';
import { getAge } from '../../assets/js/utils';

const NannyProfileScreen = ({ route, navigation }) => {
  const [fav, setFav] = useState(false);
  const [nanny, setNanny] = useState({ categories: [], reviews: [] });

  useEffect(() => {
    const id = route.params?.id;
    const item = NANNIES.find(el => el.id === id);
    setNanny(item);
  }, [route]);

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
          source={{
            uri: `https://randomuser.me/api/portraits/women/${NANNIES.indexOf(nanny)}.jpg`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.mainContent}>
          <View style={[styles.rowBetween, { marginBottom: 16 + 0 }]}>
            <View>
              <Text variant="titleSmall" style={styles.bold}>
                {nanny?.name}, {getAge(nanny.dateOfBirth)}
              </Text>
              <View style={styles.distance}>
                <Text variant="bodyMedium" style={{ color: Colors.grey, marginTop: 8 + 0 }}>
                  <MCIcon size={20} name="map-marker" />
                  {nanny.distanceKm}km away
                </Text>
                <Text variant="bodyMedium" style={{ color: Colors.grey, marginLeft: 4 + 0 }}>
                  <MCIcon size={20} name="star" color={Colors.yellow} />
                  {nanny.rating}
                </Text>
              </View>
            </View>
            <Text variant="titleSmall" style={[styles.bold, { color: Colors.primary }]}>
              $5/h
            </Text>
          </View>

          <View style={styles.section}>
            <Text variant="bodyLarge" style={styles.sectionTitle}>
              About
            </Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              {nanny.about}
            </Text>
          </View>

          <View style={styles.section}>
            <Text variant="bodyLarge" style={styles.sectionTitle}>
              Categories
            </Text>
            <View style={styles.chipContainer}>
              {nanny.categories.map(el => (
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
            <Text variant="bodyMedium">{nanny.languages}</Text>
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
            <Text variant="bodyMedium">{nanny.nationality}</Text>
          </View>

          <View style={[styles.section, styles.rowBetween]}>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              Experience
            </Text>
            <Text variant="bodyMedium">{nanny.yearsOfExperience} Year(s)</Text>
          </View>

          <View style={[styles.section, styles.lastSection]}>
            <Text variant="bodyLarge" style={styles.sectionTitle}>
              Ratings
            </Text>
            {nanny.reviews.map((review, x) => (
              <View key={review.id} style={[styles.rating, x > 1 && styles.paddingTop]}>
                <Text variant="bodyMedium" style={{ color: Colors.grey, marginBottom: 8 + 0 }}>
                  <MCIcon size={20} name="star" color={Colors.yellow} /> {review.rating}
                </Text>
                <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                  {review.comment}
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
            textColor={Colors.onPrimary}
            onPress={() => navigation.navigate('order-datetime')}>
            Book now
          </AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NannyProfileScreen;
