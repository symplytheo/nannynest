import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Chip, FAB, RadioButton, Text } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SearchFilterScreen = ({ navigation }) => {
  const [sortBy, setSortBy] = useState('');
  const [distance, setDistance] = useState('');
  const [rating, setRating] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.wrapper, styles.container]}>
        <View style={styles.rowCenter}>
          <FAB
            customSize={40}
            mode="flat"
            icon="close"
            style={styles.fab}
            color={Colors.black}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ flex: 1 + 0 }}>
          <View style={[styles.container, styles.card]}>
            <Text variant="bodyLarge" style={styles.cardTitle}>
              Rating
            </Text>
            <View style={styles.chipContainer}>
              {['From 4', 'From 4.5', 'From 4.8'].map(el => (
                <Chip
                  key={el}
                  textStyle={styles.chipText}
                  style={styles.chip}
                  selected={rating === el}
                  onPress={() => setRating(el)}>
                  {el}
                </Chip>
              ))}
            </View>
          </View>

          <View style={[styles.container, styles.card]}>
            <Text variant="bodyLarge" style={styles.cardTitle}>
              Distance
            </Text>
            <View style={styles.chipContainer}>
              {['Up to 1km', 'Up to 2km', 'Up to 3km'].map(el => (
                <Chip
                  key={el}
                  textStyle={styles.chipText}
                  style={styles.chip}
                  selected={distance === el}
                  onPress={() => setDistance(el)}>
                  {el}
                </Chip>
              ))}
            </View>
          </View>

          <View style={[styles.container, styles.card]}>
            <Text variant="bodyLarge" style={styles.cardTitle}>
              Sort by
            </Text>
            <RadioButton.Group onValueChange={v => setSortBy(v)} value={sortBy}>
              {['Top rated', 'Nearest to me'].map(el => (
                <View
                  key={el}
                  style={[styles.rowCenter, { marginVertical: 8 + 0 }]}>
                  <RadioButton.Android value={el} />
                  <Text variant="bodyLarge" style={{ marginLeft: 8 + 0 }}>
                    {el}
                  </Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>
        </View>

        <AppButton onPress={navigation.goBack}>Save</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default SearchFilterScreen;
