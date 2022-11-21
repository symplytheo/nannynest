import React, { useEffect, useRef, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Text, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import { styles } from './styles';
import person from '../../assets/img/person.png';

const ChatScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [text, setText] = useState('');

  const handleSend = () => {
    console.log(text);
    setText('');
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity activeOpacity={0.7} onPress={navigation.goBack}>
          <MCIcon name="close" color={Colors.black} size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Linking.openURL('tel:+2348032616345')}>
          <MCIcon name="phone" color={Colors.black} size={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const Message = ({ content, time, isRead, type = 'sender' }) => (
    <View style={{ marginVertical: 4 + 0 }}>
      <View
        style={[
          styles.chatRow,
          type === 'receiver' && { justifyContent: 'flex-start' + '' },
        ]}>
        {type === 'receiver' && (
          <Avatar.Image size={24} source={person} style={styles.chatAvatar} />
        )}
        <View>
          <View style={[styles.text, styles[type]]}>
            <Text variant="bodyMedium" style={styles[type]}>
              {content}
            </Text>
          </View>
          <Text
            variant="bodySmall"
            style={[
              { color: Colors.grey },
              type === 'sender' && { textAlign: 'right' + '' },
            ]}>
            {time}{' '}
            <MCIcon
              name="check-all"
              size={12}
              color={isRead ? Colors.secondary : Colors.grey}
            />
          </Text>
        </View>
      </View>
    </View>
  );

  const scrollViewRef = useRef();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={[styles.p16, { minHeight: 100 + '%' }]}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }>
        <View>
          <Text variant="bodyMedium" style={[styles.chatDate, styles.mb16]}>
            Thu, Sep 29
          </Text>
          {[...Array(10)].map((_, i) => (
            <View key={i}>
              <Message time="11:59" content="Hello!" isRead={true} />
              <Message time="11:59" content="Where are you?" type="receiver" />
            </View>
          ))}
        </View>

        <View style={{ height: insets.bottom * 5.5 }} />
      </ScrollView>

      <View style={[styles.chatInputBg, { paddingBottom: insets.bottom }]}>
        <TextInput
          mode="outlined"
          value={text}
          style={styles.chatInput}
          multiline
          placeholder="Type a chat"
          onChangeText={v => setText(v)}
          right={
            <TextInput.Icon
              icon="send"
              color={focused => (focused ? Colors.primary : Colors.grey)}
              rippleColor={Colors.primaryContainer}
              onPress={handleSend}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
