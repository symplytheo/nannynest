import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Chip, Searchbar, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading] = useState(false);
  const [category, setCategory] = useState(null);

  const handleSearch = () => {
    Alert.alert('Search', searchQuery);
  };

  return (
    <SafeAreaView styles={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.rowCenter}>
          <View style={{ flex: 1 + 0 }}>
            <Searchbar
              value={searchQuery}
              placeholder="Search"
              elevation={0}
              iconColor={Colors.primary}
              inputStyle={styles.searchInput}
              style={styles.search}
              loading={loading}
              placeholderTextColor={Colors.grey}
              onChangeText={query => setSearchQuery(query)}
              onSubmitEditing={handleSearch}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.ml16}
            onPress={() => navigation.navigate('search-filter')}>
            <MCIcon name="filter-variant" size={32} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text variant="bodyLarge" style={styles.sectionTitle}>
            Categories
          </Text>
          <View style={styles.chipContainer}>
            {['Infants', 'Toddler', 'Elderly', 'Disabled'].map(el => (
              <Chip
                key={el}
                selected={el === category}
                textStyle={styles.chipText}
                style={styles.chip}
                onPress={() => setCategory(el)}>
                {el}
              </Chip>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
