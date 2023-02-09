import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, FAB, Text } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';
import person from '../../assets/img/person.png';
import { getRandomArrayItems, getAge } from '../../assets/js/utils';
import { NANNIES } from '../../assets/js/data';

const DashboardScreen = ({ route, navigation }) => {
  const [showOngoing, setShowOngoing] = useState(false);
  const [showRateNanny, setShowRateNanny] = useState(true);

  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [scale]);

  useEffect(() => {
    const ongoingSession = route.params?.ongoingSession;
    setShowOngoing(ongoingSession);
    setShowRateNanny(!ongoingSession);
  }, [route]);

  const ProfileCard = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
        onPress={() => navigation.navigate('nanny', { id: item.id })}>
        <Image
          source={{
            uri: `https://randomuser.me/api/portraits/women/${NANNIES.indexOf(item)}.jpg`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardText}>
          <Text variant="bodyMedium" style={styles.bold}>
            {item.name.split(' ')[0]}, <Text variant="bodyMedium">{getAge(item.dateOfBirth)}</Text>
          </Text>
          <Text variant="bodySmall" style={[{ color: Colors.grey }, styles.cardRow]}>
            <MCIcon size={14} name="map-marker" />
            {item.distanceKm}km away
          </Text>
          <View style={styles.cardRow}>
            <StarRating
              rating={item.rating}
              starSize={18}
              color={Colors.yellow}
              starStyle={styles.mx0}
              style={styles.cardRating}
              onChange={() => {}}
            />
            <Text variant="bodySmall" style={[{ color: Colors.grey }, styles.bold]}>
              {item.rating}
            </Text>
          </View>
          <Text variant="bodyLarge" style={[styles.bold, styles.cardRow]}>
            $5/h
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SessionCard = ({ title, subtitle, onPress }) => (
    <TouchableOpacity
      style={[styles.section, styles.sessionCard]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Avatar.Image size={48} source={person} style={{ backgroundColor: Colors.grey }} />
      <View style={styles.sessionCardText}>
        <Text variant="bodyMedium" style={[{ color: Colors.primary }, styles.bold, styles.mb4]}>
          {title}
        </Text>
        <Text variant="bodySmall" style={{ color: Colors.grey }}>
          {subtitle}
        </Text>
      </View>
      <MCIcon size={24} name="chevron-right" color={Colors.grey} />
    </TouchableOpacity>
  );

  // data
  const topRateds = getRandomArrayItems(NANNIES, 8);
  const nearBys = getRandomArrayItems(NANNIES, 5);
  const saveds = getRandomArrayItems(NANNIES, 3);

  return (
    <SafeAreaView style={styles.container}>
      {/*  */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContent}>
        <View style={styles.topContent}>
          {/* Current Location */}
          <TouchableOpacity
            style={[styles.cardRow, styles.location]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('map-edit')}>
            <MCIcon size={24} name="map-marker" color={Colors.primary} />
            <Text variant="bodyMedium" style={styles.locationText}>
              5a, Ajayi Oni Street, Lagos, Nigeria
            </Text>
          </TouchableOpacity>

          {/* Ongoing Session */}
          {showOngoing && (
            <SessionCard
              title="Ongoing session"
              subtitle="Tap to see livefeed"
              onPress={() => navigation.navigate('livefeed')}
            />
          )}

          {/* Rate Nanny */}
          {showRateNanny && (
            <SessionCard
              title="Rate your Nanny"
              subtitle="Mary"
              onPress={() => navigation.navigate('rate-nanny')}
            />
          )}
        </View>
        <View style={[styles.section, { marginTop: 0 + 0 }]}>
          <Text variant="bodyLarge" style={styles.sectionTitle}>
            Top rated
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topRateds.map((item, v) => (
              <ProfileCard key={item.id} index={v} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text variant="bodyLarge" style={styles.sectionTitle}>
            Near you
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {nearBys.map((item, v) => (
              <ProfileCard key={item.id} index={v} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text variant="bodyLarge" style={styles.sectionTitle}>
            Saved favorite
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {saveds.map((item, v) => (
              <ProfileCard key={item.id} index={v} item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/*  */}
      {showOngoing && (
        <Animated.View style={[styles.fabContainer, { transform: [{ scale }] }]}>
          <FAB
            icon="circle"
            color={Colors.primary}
            onPress={() => navigation.navigate('livefeed')}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default DashboardScreen;
