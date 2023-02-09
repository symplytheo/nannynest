import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: { padding: 16 },
  lock: { height: 240 },
  title: {
    marginBottom: 16,
    fontFamily: 'Montserrat-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
    color: Colors.white,
  },
  row: { flexDirection: 'row' },
  mb24: { marginBottom: 16 },
  text: { color: Colors.white, marginLeft: 8 },
  fab: { backgroundColor: Colors.onPrimary, borderRadius: 8 },
  fx1: { flex: 1 },
  mb16: { marginTop: 16 },
});
