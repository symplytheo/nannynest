import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mb8}>
          <Text
            variant="bodyLarge"
            style={[{ fontWeight: 500 + '' }, styles.mb8]}>
            How can I help you?
          </Text>
          <View style={[styles.profileOverview, styles.mb8]}>
            <MCIcon
              name="email-outline"
              size={20}
              style={{ marginRight: 4 + 0 }}
              color={Colors.primary}
            />
            <Text variant="bodyMedium">contact@nannynest.com</Text>
          </View>
        </View>

        <Divider style={[styles.mb8, styles.mt8]} />

        <View style={styles.mt8}>
          <Text
            variant="bodyLarge"
            style={[{ fontWeight: 500 + '' }, styles.mb8]}>
            FAQs
          </Text>
          <List.AccordionGroup>
            {[...Array(5)].map((_, i) => (
              <View key={i + 1}>
                <List.Accordion
                  title="How do I withdraw my earnings?"
                  titleNumberOfLines={2}
                  id={i + 1}
                  style={styles.accordion}
                  titleStyle={styles.faqQues}
                  theme={{ colors: { primary: Colors.black } }}>
                  <List.Item
                    title="Just go to earnings and withdraw, it should be that difficult, right?"
                    titleNumberOfLines={6}
                    titleStyle={styles.faqAns}
                    style={styles.padless}
                  />
                </List.Accordion>
                {i < 4 && <Divider />}
              </View>
            ))}
          </List.AccordionGroup>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
