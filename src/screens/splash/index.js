import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';

const AppSplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('onboarding');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/img/nannynest.png')}
        style={styles.image}
      />
      <View style={styles.absolute}>
        <AppButton mode="text" loading={true} textColor="white" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    backgroundColor: Colors.primary,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  absolute: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
  },
});

export default AppSplashScreen;
