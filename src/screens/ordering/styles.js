import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  transContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.black + '55',
  },
  orderDate: {
    backgroundColor: Colors.background,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 24,
    borderRadius: 24,
  },
  orderDateTitle: { textAlign: 'center', fontWeight: '600', marginBottom: 32 },
  orderDateLabel: { fontWeight: '600', marginBottom: 8 },
  orderDateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDateInput: { width: '48%', height: 56 },
  orderDateFabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  orderDateFab: { backgroundColor: Colors.primary, borderRadius: 8 },
  mb16: { marginBottom: 16 },
});
