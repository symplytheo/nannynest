import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import AppButton from '../../components/AppButton';
import { Colors } from '../../styles/colors';

const AppSplashScreen = () => {
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
