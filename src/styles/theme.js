import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { Colors } from './colors';
import { Fonts } from './fonts';

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
    ...DefaultTheme,
    ...Fonts,
  },
};

export default theme;
