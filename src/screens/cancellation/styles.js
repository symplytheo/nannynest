import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: { padding: 16, flex: 1 },
  title: {
    marginBottom: 16,
    fontFamily: 'Montserrat-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  flex1: { flex: 1 },
  comment: { height: 112 },
});
