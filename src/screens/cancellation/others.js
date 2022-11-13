import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import { styles } from './styles';

const CancellationOthersScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Share your comment' });
  }, [navigation]);

  const [comment, setComment] = useState('');
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <TextInput
            mode="outlined"
            value={comment}
            multiline
            numberOfLines={4}
            style={styles.comment}
            onChangeText={setComment}
          />
        </View>
        <AppButton>Submit</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default CancellationOthersScreen;
