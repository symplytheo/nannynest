import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  transContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.black + '77',
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
  mt16: { marginTop: 16 },
  picker: {
    inputIOS: {
      borderWidth: 1,
      borderColor: Colors.grey,
      borderRadius: 6,
      fontSize: 16,
      height: 56,
      paddingHorizontal: 12,
      backgroundColor: Colors.onPrimary,
    },
    inputAndroid: {
      borderWidth: 1,
      borderColor: Colors.grey,
      borderRadius: 6,
      fontSize: 16,
      height: 56,
      paddingHorizontal: 12,
      backgroundColor: Colors.onPrimary,
    },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: { fontWeight: '600', color: Colors.onPrimaryContainer },
  p16: { padding: 16 },
  rate: { alignItems: 'flex-end', paddingHorizontal: 8, marginBottom: 8 },
  totalBtn: {
    position: 'absolute',
    width: '100%',
  },
  bordered: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey + '50',
  },
  map: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  paymentRow: { flexDirection: 'row', alignItems: 'center' },
  dateSummary: { marginLeft: 4, flex: 1 },
  safety: {
    backgroundColor: Colors.secondary,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24,
  },
  safetyImage: { height: 150, width: 100 },
  mapBg: {
    minHeight: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  arrow: { flexDirection: 'row', justifyContent: 'center', width: '100%' },
  closeFabContainer: {
    position: 'absolute',
    flexDirection: 'row',
  },
  closeFab: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginLeft: 16,
  },
  rowed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
