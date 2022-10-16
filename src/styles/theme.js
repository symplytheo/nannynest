import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#CC5295',
    primaryContainer: '#F5DCEA',
    secondary: '#4169F5',
    secondaryContainer: '#D9E1FD',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#29101E',
    onSecondary: '#F5F7FF',
    onSecondaryContainer: '#0D1531',
  },
  fonts: {
    displayLarge: {
      ...DefaultTheme.fonts.displayLarge,
      fontFamily: 'Montserrat-Regular',
    },
    displayMedium: {
      ...DefaultTheme.fonts.displayMedium,
      fontFamily: 'Montserrat-Regular',
    },
    displaySmall: {
      ...DefaultTheme.fonts.displaySmall,
      fontFamily: 'Montserrat-Regular',
    },

    headlineLarge: {
      ...DefaultTheme.fonts.headlineLarge,
      fontFamily: 'Montserrat-Regular',
    },
    headlineMedium: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: 'Montserrat-Regular',
    },
    headlineSmall: {
      ...DefaultTheme.fonts.headlineSmall,
      fontFamily: 'Montserrat-Regular',
    },

    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: 'Montserrat-Regular',
    },
    titleMedium: {
      ...DefaultTheme.fonts.titleMedium,
      fontFamily: 'Montserrat-Medium',
    },
    titleSmall: {
      ...DefaultTheme.fonts.titleSmall,
      fontFamily: 'Montserrat-Medium',
    },

    labelLarge: {
      ...DefaultTheme.fonts.labelLarge,
      fontFamily: 'Montserrat-Medium',
    },
    labelMedium: {
      ...DefaultTheme.fonts.labelMedium,
      fontFamily: 'Montserrat-Medium',
    },
    labelSmall: {
      ...DefaultTheme.fonts.labelSmall,
      fontFamily: 'Montserrat-Medium',
    },

    bodyLarge: {
      ...DefaultTheme.fonts.bodyLarge,
      fontFamily: 'Montserrat-Regular',
    },
    bodyMedium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontFamily: 'Montserrat-Regular',
    },
    bodySmall: {
      ...DefaultTheme.fonts.bodySmall,
      fontFamily: 'Montserrat-Regular',
    },
  },
};

export default theme;
