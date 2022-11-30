import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: { padding: 16 },
  dp: { height: 56, width: 56, borderRadius: 16 },
  mb8: { marginBottom: 8 },
  mt8: { marginTop: 8 },
  bold: { fontWeight: Platform.OS === 'ios' ? '700' : '600' },
  tabActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderColor: Colors.grey + '33',
  },
  socials: {
    borderTopWidth: 1,
    borderColor: Colors.grey + '33',
    marginTop: 8,
    paddingVertical: 16,
  },
  profileOverview: { flexDirection: 'row', alignItems: 'center' },
  socialBtn: { height: 56, marginVertical: 8 },
});

export default styles;
