import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import StarRating from 'react-native-star-rating-widget';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import { styles } from './styles';

const RateNannyScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  return (
    <TouchableOpacity activeOpacity={1} onPress={navigation.goBack} style={styles.transContainer}>
      <View
        style={[styles.orderDate, { paddingBottom: insets.bottom }]}
        onStartShouldSetResponder={event => true}
        onTouchEnd={e => {
          e.stopPropagation();
        }}>
        <Text variant="bodyLarge" style={[styles.orderDateTitle, styles.mb8]}>
          Rate your Nanny Services
        </Text>
        <View>
          <StarRating
            rating={rating}
            starSize={36}
            color={Colors.yellow}
            starStyle={styles.mx0}
            style={[styles.mx_auto, styles.mb8]}
            onChange={v => setRating(v)}
          />
          <TextInput
            mode="outlined"
            value={comment}
            multiline
            numberOfLines={4}
            style={[styles.comment, styles.mb16]}
            onChangeText={v => setComment(v)}
          />
          <AppButton>Submit rating</AppButton>
          <AppButton mode="text" onPress={navigation.goBack}>
            Cancel
          </AppButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RateNannyScreen;
