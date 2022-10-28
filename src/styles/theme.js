import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { Colors } from './colors';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    primaryContainer: Colors.primaryContainer,
    secondary: Colors.secondary,
    secondaryContainer: Colors.secondaryContainer,
    onPrimary: Colors.onPrimary,
    onPrimaryContainer: Colors.onPrimaryContainer,
    onSecondary: Colors.onSecondary,
    onSecondaryContainer: Colors.onSecondaryContainer,
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
      fontSize: 36,
      lineHeight: 44,
    },
    headlineMedium: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: 'Montserrat-Regular',
      fontSize: 32,
      lineHeight: 40,
    },
    headlineSmall: {
      ...DefaultTheme.fonts.headlineSmall,
      fontFamily: 'Montserrat-Regular',
      fontSize: 28,
      lineHeight: 36,
    },

    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: 'Montserrat-Regular',
      fontSize: 24,
      lineHeight: 32,
    },
    titleMedium: {
      ...DefaultTheme.fonts.titleMedium,
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      lineHeight: 28,
    },
    titleSmall: {
      ...DefaultTheme.fonts.titleSmall,
      fontFamily: 'Montserrat-Medium',
      fontSize: 18,
      lineHeight: 24,
    },

    labelLarge: {
      ...DefaultTheme.fonts.labelLarge,
      fontFamily: 'Montserrat-Medium',
      fontSize: 18,
      lineHeight: 24,
    },
    labelMedium: {
      ...DefaultTheme.fonts.labelMedium,
      fontFamily: 'Montserrat-Medium',
      fontSize: 16,
      lineHeight: 24,
    },
    labelSmall: {
      ...DefaultTheme.fonts.labelSmall,
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      lineHeight: 20,
    },

    bodyLarge: {
      ...DefaultTheme.fonts.bodyLarge,
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    bodyMedium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontFamily: 'Montserrat-Regular',
      fontSize: 14,
      lineHeight: 20,
    },
    bodySmall: {
      ...DefaultTheme.fonts.bodySmall,
      fontFamily: 'Montserrat-Regular',
      fontSize: 12,
      lineHeight: 16,
    },
  },
};

export default theme;
