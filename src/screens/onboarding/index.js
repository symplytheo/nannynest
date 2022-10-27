import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Text } from 'react-native-paper';
import AppButton from '../../components/AppButton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SLIDES = [
  {
    key: 1,
    title: 'I am a Nanny Book me',
    text: 'It is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    image: require('../../assets/img/slide-1.png'),
  },
  {
    key: 2,
    title: 'I am a Nanny Book me 2',
    text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    image: require('../../assets/img/slide-2.png'),
  },
  {
    key: 3,
    title: 'I am a Nanny Book me 3',
    text: 'Book me and rest nice',
    image: require('../../assets/img/slide-3.png'),
  },
];

const OnboardingScreen = () => {
  const _renderItem = ({ item }) => (
    <ImageBackground source={item.image} style={styles.backgroundImage}>
      <LinearGradient
        style={[
          styles.mainContent,
          {
            paddingTop: item.topSpacer,
            paddingBottom: item.bottomSpacer,
            width: item.width,
            height: item.height,
          },
        ]}
        colors={['#CC5295BF', '#29101EFA']}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
        locations={[0, 0.6]}>
        <Image source={require('../../assets/img/nannynest.png')} />
        <View style={styles.textContent}>
          <Text variant="titleMedium" style={styles.title}>
            {item.title}
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            {item.text}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );

  const _renderNextButton = () => (
    <View style={styles.nextBtn}>
      <Text variant="labelLarge" style={styles.nextBtnText}>
        Next
      </Text>
    </View>
  );

  const _renderDoneButton = () => {
    return (
      <AppButton
        buttonColor={Colors.onPrimary}
        textColor={Colors.primary}
        onPress={_onDone}>
        Get Started
      </AppButton>
    );
  };

  const _onDone = () => {
    console.log('Get Started!!');
  };

  return (
    <AppIntroSlider
      data={SLIDES}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      dotStyle={styles.dotStyle}
      bottomButton
    />
  );
};

export default OnboardingScreen;
